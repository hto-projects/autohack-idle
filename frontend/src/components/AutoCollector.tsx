import { useDispatch, useSelector } from "react-redux";
import { GameVariable } from "../../../shared/types";
import { calculateVariableValue } from "../../../shared/util";
import { addBits, IGameData } from "../slices/gameDataSlice";
import { useEffect, useRef } from "react";
import { IGameState, previousLoginInfo } from "../store";
import { ALImage } from "./Image";
import { ImageType } from "../../../shared/types";
import { playSoundEffect } from "../soundEffect";
import { useKeyDown } from "../../frontend-util";

interface IDuration {
  unit: string;
  duration: number;
}

let durationString: string = undefined;
if (previousLoginInfo.bits !== 0) {
  const durationUnits = ["hours", "minutes", "seconds"];
  const usedDurations: IDuration[] = [];
  const bitsText = previousLoginInfo.bits > 1 ? "bits" : "bit";
  durationString = `${previousLoginInfo.bits} ${bitsText} were collected idly over `;

  for (const durationUnit of durationUnits) {
    const currDuration: number = previousLoginInfo.durationObj[durationUnit];
    if (currDuration > 1) {
      const unitText = currDuration === 1 ? durationUnit.slice(0, -1) : durationUnit; // removal plural if currDuration === 1
      usedDurations.push({ unit: unitText, duration: currDuration });
    }
  }
  const comma = usedDurations.length === 3 ? "," : "";
  for (let i = 0; i < usedDurations.length - 1; i++) {
    durationString += `${usedDurations[i].duration} ${usedDurations[i].unit}${comma} `;
  }
  durationString += usedDurations.length > 1 ? "and " : "";
  const lastDuration = usedDurations.at(-1);
  durationString += `${lastDuration?.duration} ${lastDuration?.unit}\t`;
}

export default function AutoCollector() {
  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  const autoBitAmount: number = calculateVariableValue(gameData.ups.acquired, GameVariable.AutoBitGatheringAmount);
  const autoBitInterval: number = calculateVariableValue(gameData.ups.acquired, GameVariable.AutoBitGatheringInterval);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const dispatch = useDispatch();

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

  const showButtonOnClick = () => {
    dialogRef.current.showModal();
    playSoundEffect("al");
  };

  const closeButtonOnClick = () => {
    dialogRef.current.close();
    playSoundEffect("close");
  };

  useKeyDown(closeButtonOnClick, ["Escape"]);
  const bitsText = autoBitAmount > 1 ? "bits" : "bit";

  return (
    <div id="auto-collector">
      <dialog ref={dialogRef} onCancel={(e) => e.preventDefault()}>
        <span>{`Al is currently collecting ${autoBitAmount} ${bitsText} every ${autoBitInterval} milliseconds.`}</span>
        <br></br>
        <span>{durationString}</span>
        <button style={{ alignSelf: "center" }} onClick={closeButtonOnClick}>
          Close
        </button>
      </dialog>
      <button style={{ fontSize: 25, height: "8%" }} onClick={showButtonOnClick}>
        <ALImage picture={{ image: "/upgrade_icons/big_al", type: ImageType.Png }}></ALImage>
      </button>
    </div>
  );
}
