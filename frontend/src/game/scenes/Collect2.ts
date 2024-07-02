import { GameObjects, Scene } from "phaser";
import ClickableBit from "../ClickableBit";
import { EventBus } from "../EventBus";
import { GameVariable } from "../../../../shared/types";
import { calculateVariableValue, pluckOne } from "../../../../shared/util";

export class Collect2 extends Scene {
  numBitsText: GameObjects.Text;
  // clickyBits: Array<ClickableBit>;
  bitAppearEvent: any;

  constructor() {
    super("Collect2");
  }
  maybeAddBit(bitAppearanceProb) {
    if (Math.random() < bitAppearanceProb) {
      this.addNewBit();
    }
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
    new ClickableBit(this, xPos, yPos);
  }
  create() {
    const screenTopY = this.cameras.main.worldView.y;
    const screenBottomY = screenTopY + this.cameras.main.height;
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const dataFontSize = 16;

    this.cameras.main.setBackgroundColor("#100000");

    this.numBitsText = this.add
      .text(screenCenterX, screenTopY + dataFontSize, `hm`, {
        fontFamily: "consolas",
        fontSize: dataFontSize,
        color: "#ffffff",
        align: "center"
      })
      .setOrigin(0.5)
      .setDepth(100);

    EventBus.on("change-bits", (bits: number) => {
      this.numBitsText.setText(`aata: ${bits} bits`);
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

  update() {}
}
