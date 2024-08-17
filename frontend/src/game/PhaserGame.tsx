import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import StartGame from "./main";
import { EventBus } from "./EventBus";
import { Scene } from "phaser";
import { useDispatch, useSelector } from "react-redux";
import { addBits, IGameData, setPreviousCooldown } from "../slices/gameDataSlice";
import { GameVariable } from "../../../shared/types";
import { calculateVariableValue } from "../../../shared/util";
import { resetGameData } from "../slices/gameDataSlice";
import { IGameState } from "../store";
interface IProps {}

export interface IRefPhaserGame {
  game: Phaser.Game | null;
  scene: Scene | null;
}

export const PhaserGame = forwardRef<IRefPhaserGame, IProps>(function PhaserGame(props, ref) {
  var savedCooldown = useSelector((state: IGameState) => state.gameData.previousCooldown);
  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  const dispatch = useDispatch();
  const [cooldown, setCooldown] = useState(savedCooldown);

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
      let virusMaxSpawn = 0;
      const virusMaxSpawnTemp = 5 + gameData.shadySales - gameData.trustySales;
      if (virusMaxSpawnTemp > 10) {
        virusMaxSpawn = 10;
      } else if (virusMaxSpawn < 2) {
        virusMaxSpawn = 2;
      } else {
        virusMaxSpawn = virusMaxSpawnTemp;
      }

      EventBus.emit("change-rates", {
        bitCheckInterval: bci,
        bitAppearanceProbability: bap,
        bitSweeperSize: sweepCheck,
        virusMaxSpawn: virusMaxSpawn
      });
    });

    return () => {
      EventBus.removeListener("current-scene-ready");
    };
  }, [ref, gameData.numBits]);

  let visible = false;
  if (calculateVariableValue(gameData.ups.acquired, GameVariable.ButtonAvailable) === 1) {
    visible = true;
  }
  function reduceCooldown() {
    setCooldown(cooldown - 1);
    dispatch(setPreviousCooldown(cooldown));
  }
  if (cooldown === 0) {
    return (
      <div style={{ flex: 1, textAlign: "center", width: "100%", height: "100%" }}>
        <button
          style={{
            visibility: visible ? "visible" : "hidden",
            marginBottom: "1%",
            width: "15%",
            height: "5%",
            fontSize: "18px"
          }}
          onClick={() => EventBus.emit("collect-all") && setCooldown(5)}
        >
          Collect All
        </button>
        <div id="game-container" style={{ flex: 1, textAlign: "center", width: "100%", height: "90%" }}></div>
      </div>
    );
  } else {
    setTimeout(reduceCooldown, 1000);
    return (
      <div style={{ flex: 1, textAlign: "center", width: "100%", height: "100%" }}>
        <button
          style={{
            visibility: visible ? "visible" : "hidden",
            marginBottom: "1%",
            width: "15%",
            height: "5%",
            fontSize: "18px"
          }}
          disabled={true}
        >
          Cooldown:{cooldown}
        </button>
        <div id="game-container" style={{ flex: 1, textAlign: "center", width: "100%", height: "90%" }}></div>
      </div>
    );
  }
});
