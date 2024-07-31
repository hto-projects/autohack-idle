import React from "react";
import { IGameData } from "../../../../shared/types";
import { useSelector } from "react-redux";
import AutoCollector from "../AutoCollector";
import { IGameState } from "../../store";

const Taskbar: React.FC = () => {
  const gameData: IGameData = useSelector((state: any) => state.gameData);
  const taskBarColor: string = useSelector((state: IGameState) => state.styleData.backgroundColor.taskbar);
  const taskBarTextColor: string = useSelector((state: IGameState) => state.styleData.textColor.taskbar);
  return (
    <div
      id="taskbar"
      style={{
        background: taskBarColor,
        width: "100%",
        height: "100%",
        color: taskBarTextColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <p style={{ textAlign: "center" }}>
        <AutoCollector></AutoCollector>
        bits: {gameData.numBits} ||| lifetime: {gameData.totalNumBits} ||| CodeCash:{" "}
        {Number(gameData.currencyAmount.toFixed(1))}
      </p>
    </div>
  );
};

export default Taskbar;
