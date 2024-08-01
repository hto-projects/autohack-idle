import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import StartGame from "./main";
import { EventBus } from "./EventBus";
import { Scene } from "phaser";
import { useDispatch, useSelector } from "react-redux";
import { addBits } from "../slices/gameDataSlice";
import { IGameData, GameVariable } from "../../../shared/types";
import { calculateVariableValue, calculateVirusMaxValue, calculateVirusSpawnRate } from "../../../shared/util";
import { resetGameData } from "../slices/gameDataSlice";

interface IProps {}

export interface IRefPhaserGame {
  game: Phaser.Game | null;
  scene: Scene | null;
}

let visible = false;

export const PhaserGame = forwardRef<IRefPhaserGame, IProps>(function PhaserGame(props, ref) {
  const gameData: IGameData = useSelector((state: any) => state.gameData);
  const dispatch = useDispatch();

  const game = useRef<Phaser.Game | null>(null!);

  if (calculateVariableValue(gameData.ups.acquired, GameVariable.ButtonAvailable) === 1) {
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
    });

    return () => {
      EventBus.removeListener("reset-game-data");
    };
  });

  useEffect(() => {
    EventBus.on("add-bit", () => {
      dispatch(addBits(1));
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
      const bci = calculateVariableValue(gameData.ups.acquired, GameVariable.BitCheckInterval);
      const bap = calculateVariableValue(gameData.ups.acquired, GameVariable.BitAppearanceProbability);
      const sweepCheck = calculateVariableValue(gameData.ups.acquired, GameVariable.BitSweeperSize);
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
    if (calculateVariableValue(gameData.ups.acquired, GameVariable.ButtonAvailable)) {
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
