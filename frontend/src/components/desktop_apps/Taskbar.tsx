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
  const taskBarColor: string = useSelector((state: IGameState) => state.styleData.backgroundColor.taskbar);
  const taskBarTextColor: string = useSelector((state: IGameState) => state.styleData.textColor.taskbar);
  const taskBarTextSize: string = useSelector((state: IGameState) => state.styleData.textSize.taskbar);
  const taskBarTextFont: string = useSelector((state: IGameState) => state.styleData.textFont.taskbar);
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
        fontSize: taskBarTextSize
      }}
    >
      <div style={{ marginRight: "2%", marginLeft: "1%", marginTop: "1%" }}>
        <AppShortcut appType={AppType.Login} setOpen={setOpenWindow} useSmaller={true}></AppShortcut>
      </div>
      <div>
        <p style={{ width: "200%" }}>{userInfo !== null && `Hi, ${userInfo.name}`}</p>
      </div>
      <div>{display}</div>
      <p style={{ textAlign: "center", marginRight: "65%", marginBottom: "0%", width: "120%" }}>
        Bits: {gameData.numBits}
        <br></br>PixelPayout: {Number(gameData.currencyAmount.toFixed(1))}
      </p>
      <div style={{ marginRight: "2%" }}>
        <AutoCollector></AutoCollector>
      </div>
      <div style={{ marginRight: "1%" }}>
        <AppShortcut appType={AppType.Settings} setOpen={setOpenWindow} useSmaller={true}></AppShortcut>
      </div>
    </div>
  );
};

export default Taskbar;
