import { useDispatch, useSelector } from "react-redux";
import { GameVariable, IGameData } from "../../../shared/types";
import { calculateVariableValue } from "../../../shared/util";
import { addBits } from "../slices/gameDataSlice";
import { useEffect } from "react";

export default function AutoCollector() {
  const gameData: IGameData = useSelector((state: any) => state.gameData);
  const autoBitAmount: number = calculateVariableValue(gameData.upgrades, GameVariable.AutoBitGatheringAmount);
  const autoBitInterval: number = calculateVariableValue(gameData.upgrades, GameVariable.AutoBitGatheringInterval);

  useEffect(() => {
    if (!(autoBitAmount && autoBitInterval)) {
      return;
    }

    const autoCollectRunner = setInterval(() => {
      dispatch(addBits({ additionalBits: autoBitAmount }));
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
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      dialog.close();
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
      <button style={{ fontSize: 25 }}>🤖</button>
    </div>
  );
}
