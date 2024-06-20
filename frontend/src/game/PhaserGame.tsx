import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import StartGame from "./main";
import { EventBus } from "./EventBus";
import { Scene } from "phaser";
import { useDispatch, useSelector } from "react-redux";
import { addBit } from "../slices/gameDataSlice";
import { IGameData, GameVariable } from "../../../shared/types";
import { calculateVariableValue } from "../../../shared/util";
import { resetGameData } from "../slices/gameDataSlice";

export interface IRefPhaserGame {
  game: Phaser.Game | null;
  scene: Scene | null;
}

interface IProps {}

export const PhaserGame = forwardRef<IRefPhaserGame, IProps>(function PhaserGame(props, ref) {
  const gameData: IGameData = useSelector((state: any) => state.gameData);
  const dispatch = useDispatch();

  const game = useRef<Phaser.Game | null>(null!);

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
      dispatch(addBit());
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
      EventBus.emit("change-rates", {
        bitCheckInterval: bci,
        bitAppearanceProbability: bap
      });
    });

    return () => {
      EventBus.removeListener("current-scene-ready");
    };
  }, [ref, gameData.numBits]);

  return <div id="game-container" style={{ flex: 1, textAlign: "center" }}></div>;
});
