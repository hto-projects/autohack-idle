import { Physics } from "phaser";
import { Collect } from "./scenes/Collect";

export default class Virus extends Physics.Arcade.Sprite {
  declare static scene: Collect;
  declare body: Physics.Arcade.Body;

  constructor(x: number, y: number) {
    super(Virus.scene, x, y, "virusSprite");

    Virus.scene.add.existing(this);
    Virus.scene.physics.add.existing(this);

    this.setInteractive();
    this.on("pointerdown", () => {
      this.playDeathAnim();
    });

    this.anims.play("virusAnim");

    this.body.velocity.x = this.randomVelocity();
    this.body.setGravityY(200);
    this.body.collideWorldBounds = true;
    this.body.bounce.set(1);
  }

  randomVelocity() {
    return Math.random() > 0.5 ? Phaser.Math.Between(50, 200) : Phaser.Math.Between(50, 200);
  }

  playDeathAnim() {
    Virus.scene.virusGroup.remove(this);
    this.body.velocity.x = 0;
    this.body.velocity.y = -100;
    this.body.collideWorldBounds = false;
    this.removeAllListeners();
    this.anims.stop();
    this.anims.play("virusDeathAnim");
    Virus.scene.time.delayedCall(50000, () => {
      super.destroy();
    });
  }
}
