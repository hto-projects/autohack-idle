import React from "react";
import { AppType } from "../../../../shared/types";
import UpgradeAppScreen from "./Screens/UpgradeAppScreen";
import BitMinerUpgradeScreen from "./Screens/BitMinerAppScreen";
import TitleBar from "./TitleBar";

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
  }

  return (
    <div
      style={{
        width: "80%",
        height: "80%",
        background: "purple",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "flex-start",
        color: "white",
        position: "absolute",
        zIndex: "1",
        left: "10%",
        top: "10%",
        border: "1px solid gray"
      }}
    >
      <h1>{open}</h1>

      {appWindowElements}
      <p>
        <button onClick={() => setOpen(null)}>Close</button>
      </p>
    </div>
  );
};

export default AppWindow;
