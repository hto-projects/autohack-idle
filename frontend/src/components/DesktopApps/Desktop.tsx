import React from "react";
import { AppType } from "../../../../shared/types";
import AppWindow from "./AppWindow";
import AppShortcut from "./AppShortcut";

const Desktop: React.FC = () => {
  const [openWindow, setOpenWindow] = React.useState(null as AppType | null);

  let display = null;
  if (openWindow === null) {
    display = (
      <div style={{ padding: "20px", display: "flex", gap: "20px" }}>
        <AppShortcut
          appType={AppType.Collector}
          setOpen={setOpenWindow}
          icon={"assets/AppIcons/favicon70x.png"}
        ></AppShortcut>
        <AppShortcut
          appType={AppType.Store}
          setOpen={setOpenWindow}
          icon={"assets/AppIcons/StoreIcon1.png"}
        ></AppShortcut>
        <AppShortcut
          appType={AppType.Upgrades}
          setOpen={setOpenWindow}
          icon={"assets/AppIcons/upgradesprite.png"}
        ></AppShortcut>
        <AppShortcut
          appType={AppType.Learn}
          setOpen={setOpenWindow}
          icon={"assets/AppIcons/LearnAppIcon64.png"}
        ></AppShortcut>
        <AppShortcut
          appType={AppType.Authentication}
          setOpen={setOpenWindow}
          icon={"assets/AppIcons/UserInfoAppIcon32Maybe.png"}
        ></AppShortcut>
        <AppShortcut
          appType={AppType.Settings}
          setOpen={setOpenWindow}
          icon={"assets/AppIcons/SettingsApp.png"}
        ></AppShortcut>
      </div>
    );
  } else {
    display = <AppWindow open={openWindow} setOpen={setOpenWindow}></AppWindow>;
  }

  return (
    <div id="desktop" style={{ background: "green", width: "100%", height: "100%" }}>
      {display}
    </div>
  );
};

export default Desktop;
