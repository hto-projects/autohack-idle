import { Scene } from "phaser";
import { EventBus } from "../EventBus";
import { GameVariable, IUpgrade } from "../../../../shared/types";
import { calculateVariableValue } from "../../../../shared/util";
import Bit from "../Bit";
import Virus from "../Virus";

export class Collect extends Scene {
  sweeper: Phaser.GameObjects.Rectangle;
  bitGroup: Phaser.GameObjects.Group;
  virusGroup: Phaser.GameObjects.Group;
  screenCenterX: number;
  screenCenterY: number;
  bitSweeperSize: number = 0;
  virusSpawnVar: number = 0.5;
  virusMaxSpawn: number = 5;
  bitAppearEvent: any;
  accrewedTime: number = 0;
  changeTextTime: number = 500;

  constructor() {
    super("Collect");
  }

  create() {
    this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    // this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    this.anims.create({
      key: "virusAnim",
      frames: this.anims.generateFrameNumbers("virusSprite", { start: 0, end: 2 }),
      frameRate: 3.5,
      repeat: -1
    });
    this.anims.create({
      key: "virusDeathAnim",
      frames: this.anims.generateFrameNumbers("virusDeathSprite", { start: 0, end: 10 }),
      frameRate: 3.5,
      repeat: 0
    });

    Bit.scene = this;
    Virus.scene = this;

    this.sweeper = this.add.rectangle(0, 0, this.bitSweeperSize, this.bitSweeperSize, 0xff00ff);
    this.physics.add.existing(this.sweeper, false);

    this.bitGroup = new Phaser.GameObjects.Group(this);
    this.virusGroup = new Phaser.GameObjects.Group(this);

    this.physics.add.collider(this.virusGroup, this.virusGroup);
    // the virus and bit parameters to the callback must be any because the types expected by overlap's callback parameter do not include a body member, while ClickableBit and Virus do
    this.physics.add.overlap(this.virusGroup, this.bitGroup, (_virus: any, bit: any) => {
      if (Math.random() < this.virusSpawnVar) {
        this.createVirus(bit.body.position.x, bit.body.position.y);
      }
      bit.destroy();
    });

    this.cameras.main.setBackgroundColor("#100000");

    EventBus.on("change-rates", (data) => {
      if (this.bitSweeperSize != data.bitSweeperSize) {
        this.bitSweeperSize = data.bitSweeperSize;
        this.sweeper.width = this.bitSweeperSize;
        this.sweeper.height = this.bitSweeperSize;
      }
      if (this.bitAppearEvent) {
        this.time.removeEvent(this.bitAppearEvent);
      }
      this.virusMaxSpawn = data.virusMaxSpawn;

      this.bitAppearEvent = this.time.addEvent({
        callback: this.maybeAddBit,
        args: [data.bitAppearanceProbability],
        callbackScope: this,
        delay: data.bitCheckInterval,
        loop: true
      });
    });

    EventBus.on("upgrade-purchased", (upgrades: IUpgrade[]) => {
      const bci = calculateVariableValue(upgrades, GameVariable.BitCheckInterval);
      const bap = calculateVariableValue(upgrades, GameVariable.BitAppearanceProbability);

      if (this.bitAppearEvent) {
        this.time.removeEvent(this.bitAppearEvent);
      }

      this.bitAppearEvent = this.time.addEvent({
        callback: this.maybeAddBit,
        args: [bap],
        callbackScope: this,
        delay: bci,
        loop: true
      });
    });

    EventBus.on("collect-all", () => {
      console.log("collecting");
      this.collectAll();
    });

    EventBus.emit("current-scene-ready", this);
  }

  update(_time: number, delta: number) {
    if (this.bitSweeperSize > 0 && this.input.activePointer.isDown) {
      this.sweeper.setVisible(true);
      this.sweeper.x = this.input.activePointer.x - this.bitSweeperSize / 2.3;
      this.sweeper.y = this.input.activePointer.y - this.bitSweeperSize / 2.3;

      for (const bit of this.bitGroup.getChildren() as Bit[]) {
        if (this.physics.overlap(this.sweeper, bit)) {
          bit.collect();
        }
      }
    } else {
      this.sweeper.setVisible(false);
    }

    this.accrewedTime += delta;

    if (this.accrewedTime > this.changeTextTime) {
      this.accrewedTime %= this.changeTextTime;
      for (const bit of this.bitGroup.getChildren() as Bit[]) {
        bit.changeText();
      }
      for (const virus of this.virusGroup.getChildren() as Virus[]) {
        if (Math.abs(virus.body.velocity.y) < 100 && virus.y > this.cameras.main.height - 50) {
          virus.setVelocityY(-500);
        }
      }
    }
  }

  maybeAddBit(bitAppearanceProb: number) {
    if (Math.random() < bitAppearanceProb) {
      this.addNewBit();
    }
  }

  addNewBit() {
    const xPos = this.screenCenterX + (-500 + Math.random() * 1000);
    const newBit = new Bit(xPos, 1);
    this.bitGroup.add(newBit);
  }

  createVirus(bitXPosition?: number, bitYPosition?: number) {
    const xPos = bitXPosition ?? Phaser.Math.Between(0, 1000);
    const yPos = bitYPosition ?? 0;

    if (this.virusGroup.getLength() < this.virusMaxSpawn) {
      const newVirus = new Virus(xPos, yPos);
      this.virusGroup.add(newVirus);
    }
  }

  collectAll() {
    const collectAllHelper = (count: number) => {
      const bit = this.bitGroup.getFirstAlive() as Bit;
      if (bit) {
        bit.collect(false);
      }
      this.time.delayedCall(100, () => {
        if (count > 0) {
          collectAllHelper(--count);
        }
      });
    };
    collectAllHelper(this.bitGroup.getLength());
  }
}
