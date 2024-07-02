import React from "react";
import { AppType } from "../../../../shared/types";
import AppWindow from "./AppWindow";
import AppShortcut from "./AppShortcut";

const Desktop: React.FC = () => {
  const [openWindow, setOpenWindow] = React.useState(null as AppType | null);

  let display = null;
  if (openWindow === null) {
    display = (
      <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
        <AppShortcut appType={AppType.Collector} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Store} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Upgrades} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Learn} setOpen={setOpenWindow}></AppShortcut>
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
