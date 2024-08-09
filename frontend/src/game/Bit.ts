import { GameObjects } from "phaser";
import { EventBus } from "./EventBus";
import { Collect } from "./scenes/Collect";

export default class Bit extends GameObjects.Text {
  declare static scene: Collect;
  static maxCharsetIndexValue = 1;
  static value = 1;
  charsetIndex: number;
  startheight: number = 0;

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

    this.charsetIndex = Phaser.Math.Between(0, Bit.maxCharsetIndexValue);
  }

  changeText() {
    let newIndex: number;
    do {
      newIndex = Phaser.Math.Between(0, Bit.maxCharsetIndexValue);
    } while (this.charsetIndex === newIndex);
    this.charsetIndex = newIndex;
    this.setText(charset[this.charsetIndex]);
  }

  collect(spawnVirus = true) {
    this.destroy();
    EventBus.emit("add-bit");
    if (spawnVirus && Math.random() <= Bit.scene.virusSpawnVar) {
      Bit.scene.createVirus();
    }
  }
}

export const charset: string[] = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "+",
  "/"
];
