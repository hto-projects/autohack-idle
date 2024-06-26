import { GameObjects, Scene } from "phaser";
import { EventBus } from "../EventBus";
import { calculateVariableValue, pluckOne } from "../../../../shared/util";
import { GameVariable } from "../../../../shared/types";

export class Collect extends Scene {
  numBitsText: GameObjects.Text;
  backButton: GameObjects.Text;
  clickyBits: Array<GameObjects.Text>;
  bitAppearEvent: any;

  constructor() {
    super("Collect");
  }

  getRandomBitPosition() {
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    return {
      xPos: screenCenterX + (-150 + Math.random() * 300),
      yPos: screenCenterY + (-200 + Math.random() * 400)
    };
  }

  addNewBit() {
    const { xPos, yPos } = this.getRandomBitPosition();
    const newClickyBit = this.add.text(xPos, yPos, "1", {
      color: "#ffffff",
      fontSize: 20
    });

    newClickyBit.setInteractive();
    newClickyBit.on("pointerdown", () => {
      EventBus.emit("add-bit");
      const collectedBit: GameObjects.Text = pluckOne(this.clickyBits, (bitObj) => bitObj === newClickyBit);
      collectedBit.destroy();
    });

    this.clickyBits.push(newClickyBit);
  }

  create() {
    const screenTopY = this.cameras.main.worldView.y;
    const screenBottomY = screenTopY + this.cameras.main.height;
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const dataFontSize = 16;
    const backFontSize = 16;

    this.cameras.main.setBackgroundColor("#000000");

    this.numBitsText = this.add
      .text(screenCenterX, screenTopY + dataFontSize, `hm`, {
        fontFamily: "consolas",
        fontSize: dataFontSize,
        color: "#ffffff",
        align: "center"
      })
      .setOrigin(0.5)
      .setDepth(100);

    this.backButton = this.add.text(screenCenterX + 100, screenBottomY - backFontSize * 2 - 10, "back", {
      backgroundColor: "#0000FF",
      padding: { x: 10, y: 10 },
      fontSize: backFontSize
    });
    this.backButton.setInteractive();
    this.backButton.on("pointerdown", this.backButtonClicked.bind(this));

    this.clickyBits = [];
    EventBus.on("change-bits", (bits: number) => {
      this.numBitsText.setText(`data: ${bits} bits`);
    });

    EventBus.on("change-rates", (data) => {
      if (this.bitAppearEvent) {
        this.time.removeEvent(this.bitAppearEvent);
      }

      this.bitAppearEvent = this.time.addEvent({
        callback: this.maybeAddBit,
        args: [data.bitAppearanceProbability],
        callbackScope: this,
        delay: data.bitCheckInterval,
        loop: true
      });
    });

    EventBus.on("upgrade-purchased", (upgrades) => {
      const bci = calculateVariableValue(upgrades, GameVariable.BitCheckInterval);
      const bap = calculateVariableValue(upgrades, GameVariable.BitAppearanceProbability);

      if (this.bitAppearEvent) {
        this.time.removeEvent(this.bitAppearEvent);
      }

      this.bitAppearEvent = this.time.addEvent({
        callback: this.maybeAddBit,
        args: [bap],
        callbackScope: this,
        delay: bci,
        loop: true
      });
    });

    EventBus.emit("current-scene-ready", this);
  }

  maybeAddBit(bitAppearanceProb) {
    if (Math.random() < bitAppearanceProb) {
      this.addNewBit();
    }
  }

  backButtonClicked() {
    EventBus.removeListener("change-bits");
    EventBus.removeListener("change-rates");
    this.scene.start("MainMenu");
  }
}
