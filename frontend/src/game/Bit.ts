import { GameObjects } from "phaser";
import { EventBus } from "./EventBus";
import { Collect } from "./scenes/Collect";

export default class Bit extends GameObjects.Text {
  declare static scene: Collect;
  static charset: Array<string> = ["0", "1"];
  charsetI: number;
  startheight: number = 0;
  toDestroy: boolean = false;

  constructor(x: number, y: number) {
    super(Bit.scene, x, y, "1", {});

    Bit.scene.add.existing(this);
    Bit.scene.physics.add.existing(this);

    this.setInteractive();
    this.on("pointerdown", () => {
      EventBus.emit("add-bit");
      this.collect();
    });

    Bit.scene.tweens.add({
      targets: this,
      y: { from: this.startheight, to: this.startheight + 1000 },
      duration: 10000,
      onComplete: () => {
        this.destroy();
      }
    });

    this.charsetI = Phaser.Math.Between(0, Bit.charset.length - 1);
  }

  changeText() {
    let newIndex: number;
    do {
      newIndex = Phaser.Math.Between(0, Bit.charset.length - 1);
    } while (this.charsetI === newIndex);

    this.charsetI = newIndex;
    this.setText(Bit.charset[this.charsetI]);
  }

  collect(spawnVirus = true) {
    this.destroy();
    EventBus.emit("add-bit");
    if (spawnVirus && Math.random() <= Bit.scene.virusSpawnVar) {
      Bit.scene.createVirus();
    }
  }
}
