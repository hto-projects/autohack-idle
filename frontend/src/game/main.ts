import { Boot } from "./scenes/Boot";
import { Collect } from "./scenes/Collect";
import { MainMenu } from "./scenes/MainMenu";
import { Game as MainGame } from "./scenes/Game"
import { AUTO, Game } from "phaser";
import { Preloader } from "./scenes/Preloader";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  width: 320,
  height: 569,
  parent: "game-container",
  backgroundColor: "#028af8",
  scene: [Boot, Preloader, MainMenu, Collect]
};

const StartGame = (parent: string) => {
  return new Game({ ...config, parent });
};

export default StartGame;
