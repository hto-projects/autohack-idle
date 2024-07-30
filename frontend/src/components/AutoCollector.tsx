import { useDispatch, useSelector } from "react-redux";
import { GameVariable } from "../../../shared/types";
import { calculateVariableValue } from "../../../shared/util";
import { addBits, IGameData } from "../slices/gameDataSlice";
import { useEffect } from "react";
import { IGameState } from "../store";

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

  let bitsText = autoBitAmount > 1 ? "bits" : "bit";

  return (
    <div className="auto-collector">
      <h2>🤖</h2>
      <p>
        You are currently collecting {autoBitAmount} {bitsText} every {autoBitInterval} milliseconds.
      </p>
    </div>
  );
}
