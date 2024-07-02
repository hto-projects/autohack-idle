import { GameObjects, Scene } from "phaser";
import { EventBus } from "./EventBus";

export default class ClickableBit extends GameObjects.BitmapText {
  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, "arcade", "1");
    this.setInteractive();
    this.on("pointerdown", () => {
      EventBus.emit("add-bit");
      this.destroy();
    });

    scene.add.existing(this);
    scene.physics.add.existing(this);
  }
}
