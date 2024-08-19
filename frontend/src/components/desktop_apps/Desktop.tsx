import React from "react";
import { AppType } from "../../../../shared/types";
import AppWindow from "./AppWindow";
import AppShortcut from "./AppShortcut";
import { useSelector } from "react-redux";
import { IGameState } from "../../store";
import { IGameData } from "../../slices/gameDataSlice";
import { PuzzleAppDirectory } from "../puzzles/PuzzleAppDirectory";

interface DesktopProps {
  openWindow: AppType;
  setOpenWindow: React.Dispatch<React.SetStateAction<AppType>>;
}

export default function Desktop({ openWindow, setOpenWindow }: DesktopProps) {
  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  const desktopColor = useSelector((state: IGameState) => state.styleData.backgroundColor.desktop);

  const display = openWindow === null ? null : <AppWindow open={openWindow} setOpen={setOpenWindow}></AppWindow>;

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
      {/* audio is in as a placeholder for Leo's song */}
      {/* <audio src="./../../../public/assets/audio/music/Virus Attack !!.wav" autoPlay loop></audio> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "20px 0px 0px 20px",
          gap: "20px"
        }}
      >
        <AppShortcut appType={AppType.Collector} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Upgrades} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Puzzle} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Terminal} setOpen={setOpenWindow} visible={terminalVis}></AppShortcut>
        <AppShortcut appType={AppType.Learn} setOpen={setOpenWindow}></AppShortcut>
      </div>
      {display}
    </div>
  );
}
