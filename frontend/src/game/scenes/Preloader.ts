import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {}

  preload() {
    this.load.setPath("assets");
    this.load.spritesheet("virusSprite", "Viruses/VirusSprite.png", {
      frameWidth: 48,
      frameHeight: 48
    });
    this.load.spritesheet("virusDeathSprite", "Viruses/Virus-R-Death-SpriteSheet.png", {
      frameWidth: 48,
      frameHeight: 48
    });
  }

  create() {
    this.scene.start("Collect");
  }
}
