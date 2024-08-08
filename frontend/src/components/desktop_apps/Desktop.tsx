import React from "react";
import { AppType } from "../../../../shared/types";
import AppWindow from "./AppWindow";
import AppShortcut from "./AppShortcut";
import { useSelector } from "react-redux";
import { IGameState } from "../../store";
import { IGameData } from "../../slices/gameDataSlice";
import { PuzzleAppDirectory } from "../puzzles/PuzzleAppDirectory";

export default function Desktop() {
  const [openWindow, setOpenWindow] = React.useState(null as AppType | null);
  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  const display = openWindow === null ? null : <AppWindow open={openWindow} setOpen={setOpenWindow}></AppWindow>;
  const desktopColor = useSelector((state: IGameState) => state.styleData.backgroundColor.desktop);

  let terminalVis = true;
  for (let i = 0; i < PuzzleAppDirectory.puzzleSets[1].puzzles.length; i++) {
    if (!gameData.solvedPuzzles.includes(PuzzleAppDirectory.puzzleSets[1].puzzles[i].name)) {
      terminalVis = false;
      break;
    }
  }

  return (
    <div
      id="desktop"
      style={{
        background: desktopColor,
        width: "100%",
        height: "100%",
        flexWrap: "wrap",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top"
      }}
    >
      <div style={{ padding: "20px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <AppShortcut appType={AppType.Collector} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Upgrades} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Puzzle} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Terminal} setOpen={setOpenWindow} visible={terminalVis}></AppShortcut>
        <AppShortcut appType={AppType.Learn} setOpen={setOpenWindow}></AppShortcut>
        {/* <AppShortcut appType={AppType.Help} setOpen={setOpenWindow}></AppShortcut> */}
        {/* <AppShortcut appType={AppType.Store} setOpen={setOpenWindow}></AppShortcut> */}
        {/* {<AppShortcut appType={AppType.Login} setOpen={setOpenWindow}></AppShortcut>} */}
        {/* <AppShortcut appType={AppType.Settings} setOpen={setOpenWindow}></AppShortcut> */}
      </div>
      {display}
    </div>
  );
}
