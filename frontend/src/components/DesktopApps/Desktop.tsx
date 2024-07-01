import React from "react";
import { AppType } from "../../../../shared/types";
import AppWindow from "./AppWindow";
import AppShortcut from "./AppShortcut";

const Desktop: React.FC = () => {
  const [openWindow, setOpenWindow] = React.useState(null as AppType | null);

  // let display = null;
  // if (openWindow === null) {
  //   display = (
  //     <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
  //       <AppShortcut appType={AppType.Collector} setOpen={setOpenWindow}></AppShortcut>
  //       <AppShortcut appType={AppType.Store} setOpen={setOpenWindow}></AppShortcut>
  //       <AppShortcut appType={AppType.Upgrades} setOpen={setOpenWindow}></AppShortcut>
  //     </div>
  //   );
  // } else {
  //   display = <AppWindow open={openWindow} setOpen={setOpenWindow}></AppWindow>;
  // }

  let display = openWindow === null ? null : <AppWindow open={openWindow} setOpen={setOpenWindow}></AppWindow>;

  return (
    <div id="desktop" style={{ background: "cornflowerblue", width: "100%", height: "100%" }}>
      <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
        <AppShortcut appType={AppType.Collector} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Store} setOpen={setOpenWindow}></AppShortcut>
        <AppShortcut appType={AppType.Upgrades} setOpen={setOpenWindow}></AppShortcut>
      </div>
      {display}
    </div>
  );
};

export default Desktop;
