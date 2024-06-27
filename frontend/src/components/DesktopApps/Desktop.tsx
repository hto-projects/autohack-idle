import React, { useRef } from "react";
import { AppType, IGameData } from "../../../../shared/types";
import { useDispatch, useSelector } from "react-redux";
import { IRefPhaserGame, PhaserGame } from "../../game/PhaserGame";
import UpgradesContainer from "../UpgradesContainer";
import { sellData } from "../../slices/gameDataSlice";
import AutoCollector from "../AutoCollector";
import AppWindow from "./AppWindow";
import AppShortcut from "./AppShortcut";

const Desktop: React.FC = () => {
  const gameData: IGameData = useSelector((state: any) => state.gameData);
  const dispatch = useDispatch();

  const [openWindow, setOpenWindow] = React.useState(null as AppType | null);

  //  References to the PhaserGame component (game and scene are exposed)
  const phaserRef = useRef<IRefPhaserGame | null>(null);

  let display = null;
  if (openWindow === null) {
    display = (
      <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
        <AppShortcut appType={AppType.Collector} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Store} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Upgrades} setOpen={setOpenWindow}></AppShortcut>
      </div>
    );
  } else {
    display = <AppWindow open={openWindow} setOpen={setOpenWindow}></AppWindow>;
  }

  return (
    <div id="desktop" style={{ background: "black", width: "100%", height: "100%" }}>
      {display}
    </div>
  );
};

export default Desktop;
