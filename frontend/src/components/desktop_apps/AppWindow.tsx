import React from "react";
import { AppType } from "../../../../shared/types";
import UpgradeAppScreen from "./screens/UpgradeAppScreen";
import BitMinerUpgradeScreen from "./screens/BitMinerAppScreen";
import LearnAppScreen from "./screens/LearnAppScreen";
import AuthContainer from "../Auth/AuthContainer";
import SettingsAppScreen from "./screens/SettingsAppScreen";
import TitleBar from "./screens/TitleBar";

interface AppWindowProps {
  open: AppType;
  setOpen: (at: AppType) => void;
}

const AppWindow: React.FC<AppWindowProps> = ({ open, setOpen }) => {
  let appWindowElements = null;
  switch (open) {
    case AppType.Collector:
      appWindowElements = <BitMinerUpgradeScreen></BitMinerUpgradeScreen>;
      break;
    case AppType.Upgrades:
      appWindowElements = <UpgradeAppScreen></UpgradeAppScreen>;
      break;
    case AppType.Store:
      break;
    case AppType.Authentication:
      appWindowElements = <AuthContainer></AuthContainer>;
      break;
    case AppType.Learn:
      appWindowElements = <LearnAppScreen></LearnAppScreen>;
      break;
    case AppType.Settings:
      appWindowElements = <SettingsAppScreen></SettingsAppScreen>;
      break;
  }

  return (
    <div
      style={{
        width: "80%",
        height: "80%",
        background: "lightgrey",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "flex-start",
        color: "black",
        position: "absolute",
        zIndex: "1",
        left: "10%",
        top: "10%",
        border: "1px solid gray"
      }}
    >
      <TitleBar open={open} setOpen={() => setOpen(null)}></TitleBar>

      {appWindowElements}
      {/* <p>
        <button onClick={}>Close</button>
      </p> */}
    </div>
  );
};

export default AppWindow;
