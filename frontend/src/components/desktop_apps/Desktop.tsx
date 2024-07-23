import React from "react";
import { AppType } from "../../../../shared/types";
import AppWindow from "./AppWindow";
import AppShortcut from "./AppShortcut";

const Desktop: React.FC = () => {
  const [openWindow, setOpenWindow] = React.useState(null as AppType | null);

  const display = openWindow === null ? null : <AppWindow open={openWindow} setOpen={setOpenWindow}></AppWindow>;

  return (
    <div id="desktop" style={{ background: "blue", width: "100%", height: "100%" }}>
      <div style={{ padding: "20px", display: "flex", gap: "20px" }}>
        <AppShortcut appType={AppType.Collector} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Upgrades} setOpen={setOpenWindow}></AppShortcut>
        {/* <AppShortcut appType={AppType.Store} setOpen={setOpenWindow}></AppShortcut> */}
        <AppShortcut appType={AppType.Learn} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Authentication} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Settings} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Puzzle} setOpen={setOpenWindow}></AppShortcut>
      </div>
      {display}
    </div>
  );
};

export default Desktop;
