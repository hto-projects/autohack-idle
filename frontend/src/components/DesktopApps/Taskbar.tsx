import React from "react";
import { IGameData } from "../../../../shared/types";
import { useSelector } from "react-redux";
import AutoCollector from "../AutoCollector";

const Taskbar: React.FC = () => {
  const gameData: IGameData = useSelector((state: any) => state.gameData);
  return (
    <div
      id="taskbar"
      style={{
        background: "grey",
        width: "100%",
        height: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <p style={{ textAlign: "center" }}>
        <AutoCollector></AutoCollector>
        bits: {gameData.numBits} ||| lifetime: {gameData.totalNumBits} ||| currency:{" "}
        {Number(gameData.currencyAmount.toFixed(1))}
      </p>
    </div>
  );
};

export default Taskbar;
