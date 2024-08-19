import React from "react";
import { useSelector } from "react-redux";
import { AppType } from "../../../../shared/types";
import AutoCollector from "../AutoCollector";
import AppShortcut from "./AppShortcut";
import { IGameState } from "../../store";

interface TaskbarProps {
  setOpenWindow: React.Dispatch<React.SetStateAction<AppType>>;
}

export default function Taskbar({ setOpenWindow }: TaskbarProps) {
  const gameData = useSelector((state: IGameState) => state.gameData);
  const userInfo = useSelector((state: IGameState) => state.auth.userInfo);
  const taskBarColor = useSelector((state: IGameState) => state.styleData.backgroundColor.taskbar);
  const taskBarTextColor = useSelector((state: IGameState) => state.styleData.textColor.taskbar);

  return (
    <div
      id="taskbar"
      style={{
        background: taskBarColor,
        color: taskBarTextColor,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundRepeat: "no-repeat",
        fontSize: "16px"
      }}
    >
      <div id="taskbar-left">
        <div>
          <AppShortcut appType={AppType.Login} setOpen={setOpenWindow} useSmaller={true}></AppShortcut>
        </div>
        <p className="appText">{userInfo !== null && `Hi, ${userInfo.name}!`}</p>
      </div>

      <div id="taskbar-center" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <span className="appText">{`Bits ${gameData.numBits}`}</span>
        <span className="appText">{`PixelPayout: ${Number(gameData.currencyAmount.toFixed(1))}`}</span>
      </div>

      <div id="taskbar-right">
        <AutoCollector></AutoCollector>
        <AppShortcut appType={AppType.Help} setOpen={setOpenWindow} useSmaller={true}></AppShortcut>
        <AppShortcut appType={AppType.Settings} setOpen={setOpenWindow} useSmaller={true}></AppShortcut>
      </div>
    </div>
  );
}
