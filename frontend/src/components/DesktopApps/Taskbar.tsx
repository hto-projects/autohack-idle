import React from "react";
import { IGameData } from "../../../../shared/types";
import { useDispatch, useSelector } from "react-redux";
import { IRefPhaserGame, PhaserGame } from "../../game/PhaserGame";
import UpgradesContainer from "../UpgradesContainer";
import { sellData } from "../../slices/gameDataSlice";
import AutoCollector from "../AutoCollector";

interface TaskbarProps {
  // Add any props you need here
}

const Taskbar: React.FC<TaskbarProps> = () => {
  const gameData: IGameData = useSelector((state: any) => state.gameData);
  return (
    <div
      id="taskbar"
      style={{
        background: "blue",
        width: "100%",
        height: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <p>
        bits: {gameData.numBits} ||| lifetime: {gameData.totalNumBits} ||| currency:{" "}
        {Number(gameData.currencyAmount.toFixed(1))}
      </p>
    </div>
  );
};

export default Taskbar;
