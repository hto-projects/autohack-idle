import { GameObjects, Scene } from "phaser";
import ClickableBit from "../ClickableBit";
import { EventBus } from "../EventBus";
import { GameVariable } from "../../../../shared/types";
import { calculateVariableValue, pluckOne } from "../../../../shared/util";

export class Collect2 extends Scene {
  numBitsText: GameObjects.Text;
  clickyBits: Array<ClickableBit> = [];
  bitAppearEvent: any;
  accrewedTime: number = 0;

  constructor() {
    super("Collect2");
  }

  maybeAddBit(bitAppearanceProb) {
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
    console.log("created");
  }

  create() {
    const screenTopY = this.cameras.main.worldView.y;
    // const screenBottomY = screenTopY + this.cameras.main.height;
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const dataFontSize = 16;
    this.cameras.main.setBackgroundColor("#100000");
    ClickableBit.arr = this.clickyBits;

    EventBus.on("change-rates", (data) => {
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
    this.time.delayedCall(5000, () => console.log(this.clickyBits));
    this.time.delayedCall(10000, () => console.log(this.clickyBits));
    this.time.delayedCall(15000, () => console.log(this.clickyBits));
    // ClickableBit.charset = ["a", "b"];
  }

  update(time: number, delta: number) {
    const changeTextTime = 500;
    this.accrewedTime += delta;
    if (this.accrewedTime > changeTextTime) {
      for (let bit of this.clickyBits) {
        bit.changeText();
      }
      this.accrewedTime = 0;

      for (let bit of this.clickyBits) {
        if (bit.toDestroy) {
          bit.destroyObj();
        }
      }
    }
  }
}
