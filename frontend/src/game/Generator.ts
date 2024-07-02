import { GameObjects, Scene } from "phaser";
import { EventBus } from "./EventBus";
import ClickableBit from "./ClickableBit";

export default class Generator {
  scene: Scene;

  constructor(scene: Scene) {
    this.scene = scene;
    this.scene.time.delayedCall(1000, () => this.init(), null, this);
  }

  init() {
    this.generateBit();
  }

  generateBit() {
    new ClickableBit(this.scene, 100, 100);
    this.scene.time.delayedCall(Phaser.Math.Between(500, 1000), () => this.generateBit(), null, this);
  }
}
