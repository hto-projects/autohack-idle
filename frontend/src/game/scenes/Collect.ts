import { GameObjects, Scene } from 'phaser';
import { EventBus } from '../EventBus';

export class Collect extends Scene {
  numBitsText: GameObjects.Text;
  backButton: GameObjects.Text;
  clickyBit: GameObjects.Text;

  constructor() {
    super('Collect');
  }

  create() {
    const screenTopY = this.cameras.main.worldView.y;
    const screenBottomY = screenTopY + this.cameras.main.height;
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenRightX = this.cameras.main.worldView.x + this.cameras.main.width;
    const dataFontSize = 16;
    const backFontSize = 16;

    this.cameras.main.setBackgroundColor("#000000");

    this.numBitsText = this.add.text(screenCenterX, screenTopY + dataFontSize, `hm`, {
      fontFamily: 'consolas', fontSize: dataFontSize, color: '#ffffff',
      align: 'center'
    }).setOrigin(0.5).setDepth(100);

    this.clickyBit = this.add.text(10 + Math.random() * 200, 10 + Math.random() * 400, "1", {
      color: "#ffffff", fontSize: 20
    });

    this.clickyBit.setInteractive();
    this.clickyBit.on("pointerdown", () => {
      EventBus.emit("add-bit");
    })

    this.backButton = this.add.text(screenRightX - 100, screenBottomY - backFontSize * 2 - 10, "back", { backgroundColor: "#0000FF", padding: { x: 10, y: 10 }, fontSize: backFontSize });
    this.backButton.setInteractive();
    this.backButton.on("pointerdown", this.backButtonClicked.bind(this));

    EventBus.on("change-bits", (bits: number) => {
      this.numBitsText.setText(`data: ${bits} bits`);
    });

    EventBus.emit('current-scene-ready', this);
  }

  backButtonClicked() {
    EventBus.removeListener("change-bits");
    this.scene.start('MainMenu');
  }
}
