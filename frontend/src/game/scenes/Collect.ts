import { Scene } from "phaser";
import ClickableBit from "../ClickableBit";
import { EventBus } from "../EventBus";
import { GameVariable } from "../../../../shared/types";
import { calculateVariableValue } from "../../../../shared/util";

export class Collect extends Scene {
  clickyBits: Array<ClickableBit> = [];
  bitAppearEvent: any;
  accrewedTime: number = 0;
  changeTextTime: number = 500;
  sweeper: Phaser.GameObjects.Rectangle;
  bitSweeperSize: number = 0;

  constructor() {
    super("Collect");
  }

  create() {
    this.sweeper = this.add.rectangle(0, 0, this.bitSweeperSize, this.bitSweeperSize, 0xff00ff);

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

    if (this.bitSweeperSize > 0) {
      if (this.input.activePointer.isDown) {
        this.sweeper.setVisible(true);
        for (let bit of this.clickyBits) {
          if (this.physics.overlap(this.sweeper, bit)) {
            bit.destroyObj();
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
        bit.destroyObj();
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
  }
}
