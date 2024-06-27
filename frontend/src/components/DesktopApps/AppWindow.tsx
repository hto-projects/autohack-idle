import React from "react";
import { AppType } from "../../../../shared/types";
import { PhaserGame } from "../../game/PhaserGame";
import UpgradeAppScreen from "./Screens/UpgradeAppScreen";
import BitMinerUpgradeScreen from "./Screens/BitMinerAppScreen";

interface AppWindowProps {
  open: AppType;
  setOpen: (at: AppType) => void;
}

const AppWindow: React.FC<AppWindowProps> = ({ open, setOpen }) => {
  let foo = null;
  if (open === AppType.Collector) {
  } else {
    foo = <p>Current open: {open}</p>;
  }

  switch (open) {
    case AppType.Collector:
      foo = <BitMinerUpgradeScreen></BitMinerUpgradeScreen>;
      break;
    case AppType.Upgrades:
      foo = <UpgradeAppScreen></UpgradeAppScreen>;
      break;
    case AppType.Store:
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
        {foo}
        <p>
          <button onClick={() => setOpen(null)}>Close</button>
        </p>
      </div>
    </div>
  );
};

export default AppWindow;
