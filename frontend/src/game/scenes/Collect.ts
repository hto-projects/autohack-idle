import { Scene } from "phaser";
import ClickableBit from "../ClickableBit";
import { EventBus } from "../EventBus";
import { GameVariable } from "../../../../shared/types";
import { calculateVariableValue } from "../../../../shared/util";
import { ImageProps } from "react-bootstrap";
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

  constructor() {
    super("Collect");
  }

  create() {
    this.sweeper = this.add.rectangle(0, 0, this.bitSweeperSize, this.bitSweeperSize, 0xff00ff);
    this.bitGroup = new Phaser.GameObjects.Group(this);
    this.virusGroup = new Phaser.GameObjects.Group(this);

    this.physics.add.existing(this.sweeper, false);

    this.cameras.main.setBackgroundColor("#100000");
    ClickableBit.arr = this.clickyBits;
    computerVirus.bitArr = this.clickyBits;

    const virus = new computerVirus(this, 400, 400, this.bitGroup);
    this.virusGroup.add(virus);

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

    if (this.bitSweeperSize > 0) {
      if (this.input.activePointer.isDown) {
        this.sweeper.setVisible(true);
        for (let bit of this.clickyBits) {
          if (this.physics.overlap(this.sweeper, bit)) {
            bit.destroy();
            EventBus.emit("add-bit");
          }
        }
      } else {
        this.sweeper.setVisible(false);
      }
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

    for (const bit of this.bitGroup.getChildren()) {
      for (const virus of this.virusGroup.getChildren()) {
        if (this.physics.overlap(bit, virus)) {
          const newVirus = new computerVirus(this, bit.body.position.x, bit.body.position.y, this.virusGroup);
          bit.destroy();
          this.virusGroup.add(newVirus);
        }
      }
    }
    for (const currentVirus of this.virusGroup.getChildren()) {
      for (const otherVirus of this.virusGroup.getChildren()) {
        if (this.physics.overlap(currentVirus, otherVirus)) {
          this.physics.add.collider(currentVirus, otherVirus);
        }
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
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    return {
      xPos: screenCenterX + (-150 + Math.random() * 300),
      yPos: screenCenterY + (-200 + Math.random() * 400)
    };
  }

  addNewBit() {
    const { xPos, yPos } = this.getRandomBitPosition();
    const newBit = new ClickableBit(this, xPos, yPos);
    this.clickyBits.push(newBit);
    this.bitGroup.add(newBit);
  }
}
