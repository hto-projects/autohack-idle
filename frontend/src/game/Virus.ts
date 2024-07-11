import { GameObjects, Physics, Scene } from "phaser";
import { EventBus } from "./EventBus";
import ClickableBit from "./ClickableBit";

export default class computerVirus extends GameObjects.Image {
  static thisArr: Array<computerVirus>;

  constructor(scene: Scene, x: number, y: number, colliderGroup: Phaser.GameObjects.Group) {
    super(scene, x, y, "Virus");
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.velocity.x = Phaser.Math.Between(-400, 500);
    this.body.velocity.y = Phaser.Math.Between(-400, 500);
    this.body.collideWorldBounds = true;
    this.body.bounce.set(1);

    // scene.physics.add.collider(this, colliderGroup, () => {
    // for (const bit of colliderGroup.getChildren()) {
    //   if (scene.physics.overlap(this, bit)) {
    //     bit.destroy();
    //     console.log("DESROYED");
    //   }
    // }
    // });
  }
}
