import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import StartGame from "./main";
import { EventBus } from "./EventBus";
import { Scene } from "phaser";

export interface IRefPhaserGame {
  game: Phaser.Game | null;
  scene: Scene | null;
  numBits: number;
  addBit: () => void;
}

interface IProps {
  numBits: number;
  addBit: () => number;
}

export const PhaserGame = forwardRef<IRefPhaserGame, IProps>(
  function PhaserGame({ numBits, addBit }, ref) {
    const game = useRef<Phaser.Game | null>(null!);

    useLayoutEffect(() => {
      if (game.current === null) {
        game.current = StartGame("game-container");

        if (typeof ref === "function") {
          ref({
            game: game.current,
            scene: null,
            numBits: numBits,
            addBit: addBit
          });
        } else if (ref) {
          ref.current = {
            game: game.current,
            scene: null,
            numBits: numBits,
            addBit: addBit
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
      EventBus.on("add-bit", () => {
        addBit();
      });

      return () => {
        EventBus.removeListener("add-bit");
      };
    });

    useEffect(() => {
      EventBus.emit("change-bits", numBits);
    }, [numBits, ref]);

    useEffect(() => {
      EventBus.on("current-scene-ready", () => {
        EventBus.emit("change-bits", numBits);
      });

      return () => {
        EventBus.removeListener("current-scene-ready");
      };
    }, [ref, numBits]);

    return <div id="game-container"></div>;
  }
);
