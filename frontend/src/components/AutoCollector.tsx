import { useDispatch, useSelector } from "react-redux";
import { GameVariable } from "../../../shared/types";
import { calculateVariableValue } from "../../../shared/util";
import { addBits, IGameData } from "../slices/gameDataSlice";
import { useEffect } from "react";
import { IGameState } from "../store";
import { ALImage, UpgradeImage } from "./Image";
import { ImageType } from "../../../shared/types";
import { playSoundEffect } from "../soundEffect";

export default function AutoCollector() {
  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  const autoBitAmount: number = calculateVariableValue(gameData.ups.acquired, GameVariable.AutoBitGatheringAmount);
  const autoBitInterval: number = calculateVariableValue(gameData.ups.acquired, GameVariable.AutoBitGatheringInterval);

  useEffect(() => {
    if (!(autoBitAmount && autoBitInterval)) {
      return;
    }

    const autoCollectRunner = setInterval(() => {
      dispatch(addBits(autoBitAmount));
    }, autoBitInterval);

    return () => clearInterval(autoCollectRunner);
  }, [autoBitAmount, autoBitInterval]);

  if (!(autoBitAmount && autoBitInterval)) {
    return <></>;
  }

  const dispatch = useDispatch();
  const dialog = document.querySelector("dialog");
  const showButton = document.querySelector("dialog + button");
  const closeButton = document.querySelector("dialog button");

  let bitsText = autoBitAmount > 1 ? "bits" : "bit";
  if (showButton) {
    showButton.addEventListener("click", () => {
      dialog.showModal();
      playSoundEffect("al");
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      dialog.close();
      playSoundEffect("close");
    });
  }

  return (
    <div className="auto-collector">
      <dialog>
        <button>Close</button>
        <p>
          Al is currently collecting {autoBitAmount} {bitsText} every {autoBitInterval} milliseconds.
        </p>
      </dialog>
      <button style={{ fontSize: 25, height: "8%" }}>
        <ALImage picture={{ image: "/upgrade_icons/big Al", type: ImageType.Png }}></ALImage>
      </button>
    </div>
  );
}
