import { GameObjects, Scene } from "phaser";
import { EventBus } from "../EventBus";

export class MainMenu extends Scene {
  title: GameObjects.Text;
  numBitsText: GameObjects.Text;
  nextButton: GameObjects.Rectangle;
  authButton: GameObjects.Rectangle;

  constructor() {
    super("MainMenu");
  }

  create() {
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    this.title = this.add
      .text(screenCenterX, screenCenterY, "Main Menu", {
        fontFamily: "Arial Black",
        fontSize: 12,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 2,
        align: "center"
      })
      .setOrigin(0.5)
      .setDepth(100);

    this.numBitsText = this.add
      .text(screenCenterX, 400, `Num Bits: ...`, {
        fontFamily: "Arial Black",
        fontSize: 24,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 2,
        align: "center"
      })
      .setOrigin(0.5)
      .setDepth(100);

    this.nextButton = this.add.rectangle(screenCenterX, 100, 100, 50, 0);
    this.nextButton.setInteractive();
    this.nextButton.on("pointerdown", this.nextButtonClicked.bind(this));

    this.authButton = this.add.rectangle(1100, 300, 150, 50, 0x4a412a);
    this.add.text(1050, 293, "Player Info");
    this.authButton.setInteractive();
    this.authButton.on("pointerdown", this.authButtonClicked.bind(this));

    EventBus.on("change-bits", (bits: number) => {
      this.numBitsText.setText(`Num Bits: ${bits}`);
    });

    EventBus.emit("current-scene-ready", this);
  }

  nextButtonClicked() {
    EventBus.removeListener("change-bits");
    this.scene.start("Collect");
  }

  authButtonClicked() {
    alert("Functionality Coming Soon!");
  }
}
