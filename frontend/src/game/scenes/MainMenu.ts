import { GameObjects, Scene } from 'phaser';
import { EventBus } from '../EventBus';

export class MainMenu extends Scene {
  title: GameObjects.Text;
  numBitsText: GameObjects.Text;
  logoTween: Phaser.Tweens.Tween | null;
  nextButton: GameObjects.Rectangle;

  constructor() {
    super('MainMenu');
  }

  create() {
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    this.title = this.add.text(screenCenterX, screenCenterY, 'Main Menu', {
      fontFamily: 'Arial Black', fontSize: 12, color: '#ffffff',
      stroke: '#000000', strokeThickness: 2,
      align: 'center'
    }).setOrigin(0.5).setDepth(100);

    this.numBitsText = this.add.text(screenCenterX, 400, `Num Bits: ...`, {
      fontFamily: 'Arial Black', fontSize: 24, color: '#ffffff',
      stroke: '#000000', strokeThickness: 2,
      align: 'center'
    }).setOrigin(0.5).setDepth(100);

    this.nextButton = this.add.rectangle(screenCenterX, 100, 100, 50, 0);
    this.nextButton.setInteractive();
    this.nextButton.on('pointerdown', this.nextButtonClicked.bind(this));

    EventBus.on("change-bits", (bits: number) => {
      this.numBitsText.setText(`Num Bits: ${bits}`);
    });

    EventBus.emit('current-scene-ready', this);
  }

  nextButtonClicked() {
    EventBus.removeListener("change-bits");
    this.scene.start("Collect");
  }
}
