import React from "react";
import { AppType } from "../../../../shared/types";
import UpgradeAppScreen from "./screens/UpgradeAppScreen";
import BitMinerUpgradeScreen from "./screens/BitMinerAppScreen";
import LearnAppScreen from "./screens/LearnAppScreen";
import LoginContainer from "../auth/LoginContainer";
import SettingsAppScreen from "./screens/SettingsAppScreen";
import TitleBar from "./screens/TitleBar";
import PuzzleAppScreen from "./screens/PuzzleAppScreen";
import HelpAppScreen from "./screens/HelpAppScreen";
import TerminalAppScreen from "./screens/TermialAppScreen";
import { IGameState } from "../../store";
import { useSelector } from "react-redux";

interface AppWindowProps {
  open: AppType;
  setOpen: (at: AppType) => void;
}

const AppWindow: React.FC<AppWindowProps> = ({ open, setOpen }) => {
  const windowBackgroundColor: string = useSelector((state: IGameState) => state.styleData.backgroundColor.window);
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
    case AppType.Login:
      appWindowElements = <LoginContainer></LoginContainer>;
      break;
    case AppType.Learn:
      appWindowElements = <LearnAppScreen></LearnAppScreen>;
      break;
    case AppType.Settings:
      appWindowElements = <SettingsAppScreen></SettingsAppScreen>;
      break;
    case AppType.Puzzle:
      appWindowElements = <PuzzleAppScreen></PuzzleAppScreen>;
      break;
    case AppType.Help:
      appWindowElements = <HelpAppScreen></HelpAppScreen>;
      return (
        <div
          style={{
            width: "32%",
            height: "67%",
            background: windowBackgroundColor,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "flex-start",
            color: "white",
            position: "absolute",
            zIndex: "1",
            left: "65%",
            top: "5%",
            border: "1px solid gray"
          }}
        >
          <TitleBar open={open} setOpen={() => setOpen(null)}></TitleBar>
          {appWindowElements}
        </div>
      );
    case AppType.Terminal:
      appWindowElements = <TerminalAppScreen></TerminalAppScreen>;
  }

  return (
    <div
      style={{
        width: "80%",
        height: "80%",
        background: windowBackgroundColor,
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
    </div>
  );
};

export default AppWindow;
