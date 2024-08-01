import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import StartGame from "./main";
import { EventBus } from "./EventBus";
import { Scene } from "phaser";
import { useDispatch, useSelector } from "react-redux";
import { addBits } from "../slices/gameDataSlice";
import { IGameData, GameVariable } from "../../../shared/types";
import { calculateVariableValue, calculateVirusMaxValue, calculateVirusSpawnRate } from "../../../shared/util";
import { resetGameData } from "../slices/gameDataSlice";
import { resetUpgrades } from "../slices/upgradesSlice";
import { Collect } from "./scenes/Collect";

export interface IRefPhaserGame {
  game: Phaser.Game | null;
  scene: Scene | null;
}

interface IProps {}

export const PhaserGame = forwardRef<IRefPhaserGame, IProps>(function PhaserGame(props, ref) {
  const gameData: IGameData = useSelector((state: any) => state.gameData);
  const dispatch = useDispatch();

  const game = useRef<Phaser.Game | null>(null!);

  var visible = false;

  if (calculateVariableValue(gameData.upgrades, GameVariable.ButtonAvailable) === 1) {
    var visible = true;
  }

  useLayoutEffect(() => {
    if (game.current === null) {
      game.current = StartGame("game-container");

      if (typeof ref === "function") {
        ref({
          game: game.current,
          scene: null
        });
      } else if (ref) {
        ref.current = {
          game: game.current,
          scene: null
        };
      }
    }

    return () => {
      if (game.current) {
        game.current.destroy(true);
        if (game.current !== null) {
          game.current = null;
        }
      }
    };
  }, [ref]);

  useEffect(() => {
    EventBus.on("reset-game-data", () => {
      dispatch(resetGameData());
      dispatch(resetUpgrades());
    });

    return () => {
      EventBus.removeListener("reset-game-data");
    };
  });

  useEffect(() => {
    EventBus.on("add-bit", () => {
      dispatch(addBits({ additionalBits: 1 }));
    });

    return () => {
      EventBus.removeListener("add-bit");
    };
  });

  useEffect(() => {
    EventBus.emit("change-bits", gameData.numBits);
  }, [gameData.numBits, ref]);

  useEffect(() => {
    EventBus.on("current-scene-ready", () => {
      EventBus.emit("change-bits", gameData.numBits);
      const bci = calculateVariableValue(gameData.upgrades, GameVariable.BitCheckInterval);
      const bap = calculateVariableValue(gameData.upgrades, GameVariable.BitAppearanceProbability);
      const sweepCheck = calculateVariableValue(gameData.upgrades, GameVariable.BitSweeperSize);
      const virusMaxSpawn = calculateVirusMaxValue(gameData.trustySales, gameData.shadySales);
      console.log(gameData.trustySales);
      let virusSpawnRate = calculateVirusSpawnRate(gameData.trustySales);
      console.log(virusSpawnRate);
      EventBus.emit("change-rates", {
        bitCheckInterval: bci,
        bitAppearanceProbability: bap,
        bitSweeperSize: sweepCheck,
        virusMaxSpawn: virusMaxSpawn,
        virusSpawnRate: virusSpawnRate
      });
    });

    return () => {
      EventBus.removeListener("current-scene-ready");
    };
  }, [ref, gameData.numBits]);

  function collectAll() {
    if (calculateVariableValue(gameData.upgrades, GameVariable.ButtonAvailable)) {
      EventBus.emit("collect-all");
    }
  }

  return (
    <div style={{ flex: 1, textAlign: "center", width: "100%", height: "100%" }}>
      <button style={{ visibility: visible ? "visible" : "hidden" }} onClick={collectAll}>
        Collect All
      </button>
      <div id="game-container" style={{ flex: 1, textAlign: "center", width: "100%", height: "90%" }}></div>
    </div>
  );
});
