import { GameObjects, Scene } from "phaser";
import { EventBus } from "./EventBus";

export default class ClickableBit extends GameObjects.Text {
  static arr: Array<ClickableBit>;
  static charset: Array<string> = ["0", "1"];
  startheight: number;
  charsetI: number = 0;
  toDestroy: boolean;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, "1", {});
    this.setInteractive();
    this.on("pointerdown", () => {
      EventBus.emit("add-bit");
      this.toDestroy = true;
    });

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.startheight = 0;
    this.init();
  }

  init() {
    this.scene.tweens.add({
      targets: this,
      y: { from: this.startheight, to: this.startheight + 1000 },
      duration: 10000,
      onComplete: () => {
        this.toDestroy = true;
      }
    });
  }

  changeText() {
    if (this.charsetI === ClickableBit.charset.length - 1) {
      this.charsetI = 0;
    } else {
      this.charsetI++;
    }
    this.setText(ClickableBit.charset[this.charsetI]);
  }

  destroyObj() {
    if (this) {
      ClickableBit.arr.splice(ClickableBit.arr.indexOf(this), 1);
      this.destroy();
    }
  }
}
