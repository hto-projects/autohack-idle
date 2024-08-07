// import { Boot } from "./scenes/Boot";
import { Collect } from "./scenes/Collect";
import { AUTO, Game } from "phaser";
import { Preloader } from "./scenes/Preloader";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  width: "95%",
  height: "100%",
  parent: "game-container",
  backgroundColor: "#028af8",
  physics: {
    default: "arcade",
    arcade: {
      // debug: true // Creates a border for all bounding boxes
    }
  },
  scene: [Preloader, Collect]
};

export default function StartGame(parent: string) {
  return new Game({ ...config, parent });
}
