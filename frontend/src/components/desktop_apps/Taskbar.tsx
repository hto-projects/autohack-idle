import React from "react";
import { IGameData } from "../../../../shared/types";
import { useSelector } from "react-redux";
import { AppType } from "../../../../shared/types";
import AutoCollector from "../AutoCollector";
import AppWindow from "./AppWindow";
import AppShortcut from "./AppShortcut";
import { IGameState } from "../../store";

const Taskbar: React.FC = () => {
  const gameData: IGameData = useSelector((state: any) => state.gameData);
  const [openWindow, setOpenWindow] = React.useState(null as AppType | null);
  const display = openWindow === null ? null : <AppWindow open={openWindow} setOpen={setOpenWindow}></AppWindow>;
  const userInfo = useSelector((state: IGameState) => state.auth.userInfo);

  return (
    <div
      id="taskbar"
      style={{
        background: "#333",
        width: "100%",
        height: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ marginRight: "1%", marginTop: "1%" }}>
        <AppShortcut appType={AppType.Login} setOpen={setOpenWindow} useSmaller={true}></AppShortcut>
      </div>
      <div>
        <p style={{ marginRight: "20%" }}>{userInfo !== null && `Hi, ${userInfo.name}`}</p>
      </div>
      <div>{display}</div>
      <p style={{ textAlign: "center", marginRight: "70%", marginBottom: "0%" }}>
        Bits: {gameData.numBits}
        <br></br>Pixel Payout: {Number(gameData.currencyAmount.toFixed(1))}
      </p>
      <AutoCollector></AutoCollector>
    </div>
  );
};

export default Taskbar;
