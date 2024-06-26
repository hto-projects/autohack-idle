import { GameObjects, Scene } from "phaser";
import { EventBus } from "../EventBus";
import upgradesSlice from "../../slices/upgradesSlice";
import UpgradesContainer from "../../components/UpgradesContainer";
import { calculateVariableValue } from "../../../../shared/util";
export class MainMenu extends Scene {
  title: GameObjects.Text;
  numBitsText: GameObjects.Text;
  nextButton: GameObjects.Rectangle;
  resetButton: GameObjects.Rectangle;

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
    this.resetButton = this.add.rectangle(screenCenterX, 600, 100, 50, 0xff000f);
    this.resetButton.setInteractive();
    this.resetButton.on("pointerdown", this.resetButtonClicked.bind(this));
    EventBus.on("change-bits", (bits: number) => {
      this.numBitsText.setText(`Num Bits: ${bits}`);
    });

    EventBus.emit("current-scene-ready", this);
  }

  nextButtonClicked() {
    EventBus.removeListener("change-bits");
    this.scene.start("Collect");
  }
  resetButtonClicked() {
    if (confirm("This will reset all game data, proceed?")) {
      EventBus.emit("reset-game-data");
    }
  }
}
