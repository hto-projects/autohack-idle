import { useDispatch, useSelector } from "react-redux";
import { GameVariable, IGameData } from "../../../shared/types";
import { calculateVariableValue } from "../../../shared/util";
import { addBits } from "../slices/gameDataSlice";
import { useEffect } from "react";

const AutoCollector = () => {
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

  let bitsText = autoBitAmount > 1 ? "bits" : "bit";

  return (
    <div className="auto-collector">
      <h2>🤖</h2>
      <p>
        You are currently collecting {autoBitAmount} {bitsText} every {autoBitInterval} milliseconds.
      </p>
    </div>
  );
};

export default AutoCollector;
