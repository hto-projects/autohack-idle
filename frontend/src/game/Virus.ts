import { Physics, Scene } from "phaser";

export default class computerVirus extends Physics.Arcade.Sprite {
  testVar: number;
  constructor(scene: Scene, x: number, y: number, addedVirus?) {
    super(scene, x, y, "Virus");
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body = this.body as Physics.Arcade.Body;
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