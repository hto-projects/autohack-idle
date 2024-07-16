import { Scene } from "phaser";
import ClickableBit from "../ClickableBit";
import { EventBus } from "../EventBus";
import { GameVariable } from "../../../../shared/types";
import { calculateVariableValue } from "../../../../shared/util";
import computerVirus from "../Virus";

export class Collect extends Scene {
  clickyBits: Array<ClickableBit> = [];
  bitAppearEvent: any;
  accrewedTime: number = 0;
  changeTextTime: number = 500;
  sweeper: Phaser.GameObjects.Rectangle;
  bitSweeperSize: number = 0;
  bitGroup: Phaser.GameObjects.Group;
  virusGroup: Phaser.GameObjects.Group;
  virusArray: Array<computerVirus> = [];
  virusSpawnVar: number = 0.5;
  virusMaxSpawn: number = 10;
  virusCollision: Phaser.Types.Physics.Arcade.ArcadePhysicsCallback;
  constructor() {
    super("Collect");
  }

  create() {
    this.anims.create({
      key: "VIRUS",
      frames: this.anims.generateFrameNumbers("Virus", { start: 0, end: 2 }),
      frameRate: 3.5,
      repeat: -1
    });
    this.anims.create({
      key: "VIRUSDEATH",
      frames: this.anims.generateFrameNumbers("VIRUSDEATH", { start: 0, end: 10 }),
      frameRate: 3.5,
      repeat: 0
    });
    this.sweeper = this.add.rectangle(0, 0, this.bitSweeperSize, this.bitSweeperSize, 0xff00ff);
    this.bitGroup = new Phaser.GameObjects.Group(this);
    this.virusGroup = new Phaser.GameObjects.Group(this);
    this.physics.add.collider(this.virusGroup, this.virusGroup);
    this.physics.add.overlap(this.virusGroup, this.bitGroup, this.bitCollision());

    this.physics.add.existing(this.sweeper, false);

    this.cameras.main.setBackgroundColor("#100000");
    ClickableBit.arr = this.clickyBits;

    EventBus.on("change-rates", (data) => {
      if (this.bitSweeperSize != data.bitSweeperSize) {
        this.bitSweeperSize = data.bitSweeperSize;
        this.sweeper.width = this.bitSweeperSize;
        this.sweeper.height = this.bitSweeperSize;
      }
      if (this.bitAppearEvent) {
        this.time.removeEvent(this.bitAppearEvent);
      }
      this.bitAppearEvent = this.time.addEvent({
        callback: this.maybeAddBit,
        args: [data.bitAppearanceProbability],
        callbackScope: this,
        delay: data.bitCheckInterval,
        loop: true
      });
    });

    EventBus.on("upgrade-purchased", (upgrades) => {
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

    EventBus.emit("current-scene-ready", this);
  }

  update(time: number, delta: number) {
    this.sweeper.x = this.input.activePointer.x - this.bitSweeperSize / 2.3;
    this.sweeper.y = this.input.activePointer.y - this.bitSweeperSize / 2.3;

    if (this.input.activePointer.isDown && this.bitSweeperSize > 0) {
      this.sweeper.setVisible(true);
      for (let bit of this.clickyBits) {
        if (this.physics.overlap(this.sweeper, bit)) {
          bit.destroy();
          EventBus.emit("add-bit");
          this.collectedBit();
        }
      }
    } else {
      this.sweeper.setVisible(false);
    }
    this.accrewedTime += delta;

    if (this.accrewedTime > this.changeTextTime) {
      this.accrewedTime %= this.changeTextTime;
      for (let bit of this.clickyBits) {
        bit.changeText();
      }
    }

    for (let bit of this.clickyBits) {
      if (bit.toDestroy) {
        bit.destroy();
      }
    }
  }

  maybeAddBit(bitAppearanceProb: number) {
    if (Math.random() < bitAppearanceProb) {
      this.addNewBit();
    }
  }

  getRandomBitPosition() {
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;

    return {
      xPos: screenCenterX + (-500 + Math.random() * 1000)
    };
  }

  addNewBit() {
    const { xPos } = this.getRandomBitPosition();
    const newBit = new ClickableBit(this, xPos, 1);
    this.clickyBits.push(newBit);
    this.bitGroup.add(newBit);
  }
  collectedBit() {
    if (Math.random() <= this.virusSpawnVar) {
      this.createVirus();
    }
  }

  createVirus(bitXPosition?: number, bitYPosition?: number) {
    if (bitXPosition != undefined) {
      const newVirus = new computerVirus(this, bitXPosition, bitYPosition, this.virusGroup);
      this.virusGroup.add(newVirus);
    } else {
      const newVirus = new computerVirus(this, Phaser.Math.Between(0, 1000), 0, this.virusGroup);
      this.virusGroup.add(newVirus);
    }

    if (this.virusGroup.getLength() > this.virusMaxSpawn) {
      const staleVirus = this.virusGroup.getFirstAlive();
      this.destroyVirus(staleVirus);
    }
  }

  destroyVirus(destroyedVirus) {
    let animationlessVirus = destroyedVirus;
    this.virusGroup.remove(destroyedVirus);
    animationlessVirus.removeAllListeners();
    animationlessVirus.anims.remove("VIRUS");
    animationlessVirus.anims.play("VIRUSDEATH");
    this.time.delayedCall(5000, () => {
      animationlessVirus.destroy();
    });
  }

  bitCollision() {
    return (virus, bit) => {
      this.createVirus(bit.body.position.x, bit.body.position.y);
      console.log("foo");
      bit.destroy();
    };
  }
}
