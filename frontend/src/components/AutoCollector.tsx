import { useDispatch, useSelector } from "react-redux";
import { GameVariable } from "../../../shared/types";
import { calculateVariableValue } from "../../../shared/util";
import { addBits, IGameData } from "../slices/gameDataSlice";
import { useEffect } from "react";
import { IGameState, previousLoginInfo } from "../store";
import { ALImage } from "./Image";
import { ImageType } from "../../../shared/types";
import { playSoundEffect } from "../soundEffect";

interface IDuration {
  unit: string;
  duration: number;
}

let durationString: string = undefined;
if (previousLoginInfo.bits !== 0) {
  const durationUnits = ["hours", "minutes", "seconds"];
  const durationArr: IDuration[] = [];
  durationString = `${previousLoginInfo.bits} bits were collected idly over `;

  for (const durationUnit of durationUnits) {
    const currDuration: number = previousLoginInfo.durationObj[durationUnit];
    if (currDuration === 0) {
      continue;
    }
    const unit = currDuration === 1 ? durationUnit.slice(0, -1) : durationUnit;
    durationArr.push({ unit: unit, duration: currDuration });
  }
  const comma = durationArr.length === 3 ? "," : "";
  for (let i = 0; i < durationArr.length - 1; i++) {
    durationString += `${durationArr[i].duration} ${durationArr[i].unit}${comma} `;
  }

  durationString += durationArr.length > 1 ? "and " : "";
  console.log(durationArr);
  const lastDuration = durationArr.at(-1);
  console.log(lastDuration);
  durationString += `${lastDuration?.duration} ${lastDuration?.unit}\t`;
}

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
        <span>{`Al is currently collecting ${autoBitAmount} ${bitsText} every ${autoBitInterval} milliseconds.`}</span>
        <br></br>
        <span>{durationString}</span>
        <button style={{ alignSelf: "center" }}>Close</button>
      </dialog>
      <button style={{ fontSize: 25, height: "8%" }}>
        <ALImage picture={{ image: "/upgrade_icons/big Al", type: ImageType.Png }}></ALImage>
      </button>
    </div>
  );
}
