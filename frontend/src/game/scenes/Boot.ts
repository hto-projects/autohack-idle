import { Scene } from "phaser";

export class Boot extends Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.image("Virus", "assets/Viruses/Virus_64x64.png");
  }

  create() {
    this.scene.start("Preloader");
  }
}
