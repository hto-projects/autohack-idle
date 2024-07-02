import React from "react";
import { AppType } from "../../../../shared/types";
import UpgradeAppScreen from "./Screens/UpgradeAppScreen";
import BitMinerUpgradeScreen from "./Screens/BitMinerAppScreen";
import SettingsAppScreen from "./Screens/SettingsAppScreen";
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
    case AppType.Settings:
      appWindowElements = <SettingsAppScreen></SettingsAppScreen>;
      break;
  }

  return (
    <div style={{ width: "100%", height: "100%", background: "black", padding: "20px" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "purple",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
          color: "white"
        }}
      >
        <h1>{open}</h1>
        {appWindowElements}
        <p>
          <button onClick={() => setOpen(null)}>Close</button>
        </p>
      </div>
    </div>
  );
};

export default AppWindow;
