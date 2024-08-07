import React from "react";
import { useSelector } from "react-redux";
import { AppType } from "../../../../shared/types";
import AutoCollector from "../AutoCollector";
import AppWindow from "./AppWindow";
import AppShortcut from "./AppShortcut";
import { IGameState } from "../../store";
import { IGameData } from "../../slices/gameDataSlice";

const Taskbar: React.FC = () => {
  const [openWindow, setOpenWindow] = React.useState(null as AppType | null);
  const display = openWindow === null ? null : <AppWindow open={openWindow} setOpen={setOpenWindow}></AppWindow>;
  const gameData: IGameData = useSelector((state: any) => state.gameData);
  const userInfo = useSelector((state: IGameState) => state.auth.userInfo);
  const taskBarColor = useSelector((state: IGameState) => state.styleData.backgroundColor.taskbar);
  const taskBarTextColor = useSelector((state: IGameState) => state.styleData.textColor.taskbar);
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
        alignItems: "center",
        fontSize: "16px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontFamily: "PixeloidMono"
      }}
    >
      <div style={{ marginRight: "2%", marginLeft: "1%", marginTop: "1%" }}>
        <AppShortcut appType={AppType.Login} setOpen={setOpenWindow} useSmaller={true}></AppShortcut>
      </div>
      <div>
        <p id="appText" style={{ width: "200%" }}>
          {userInfo !== null && `Hi, ${userInfo.name}!`}
        </p>
      </div>
      <div>{display}</div>
      <p id="appText" style={{ textAlign: "center", marginRight: "34%", marginLeft: "34%", width: "200%" }}>
        Bits: {gameData.numBits}
        <br></br>PixelPayout: {Number(gameData.currencyAmount.toFixed(1))}
      </p>
      <div style={{ marginRight: "2%", textAlign: "center" }}>
        <AutoCollector></AutoCollector>
      </div>
      <div style={{ marginRight: "1%" }}>
        <AppShortcut appType={AppType.Help} setOpen={setOpenWindow} useSmaller={true}></AppShortcut>
      </div>
      <div style={{ marginRight: "1%" }}>
        <AppShortcut appType={AppType.Settings} setOpen={setOpenWindow} useSmaller={true}></AppShortcut>
      </div>
    </div>
  );
};

export default Taskbar;
