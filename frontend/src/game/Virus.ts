import { GameObjects, Physics, Scene } from "phaser";
import { EventBus } from "./EventBus";
import ClickableBit from "./ClickableBit";
import { ChildProcess } from "child_process";

export default class computerVirus extends GameObjects.Sprite {
  testVar: number;
  constructor(scene: Scene, x: number, y: number, colliderGroup: Phaser.GameObjects.Group) {
    super(scene, x, y, "Virus");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.anims.play("VIRUS");
    this.body.velocity.x = this.randomVelocity();
    this.body.setGravityY(200);
    this.body.collideWorldBounds = true;
    this.body.bounce.set(1);
    this.setInteractive();
    this.on("pointerdown", () => {
      scene.destroyVirus(this);
    });
  }
  randomVelocity() {
    let givenVelocity;
    if (Math.random() > 0.5) {
      givenVelocity = Phaser.Math.Between(50, 200);
    } else {
      givenVelocity = Phaser.Math.Between(-50, -200);
    }
    return givenVelocity;
  }
}
