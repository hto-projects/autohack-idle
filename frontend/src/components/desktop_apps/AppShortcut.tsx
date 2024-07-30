import React from "react";
import { AppType } from "../../../../shared/types";
import { useSelector } from "react-redux";
import { IGameState } from "../../store";

interface AppShortcutProps {
  appType: AppType;
  setOpen: (at: AppType) => void;
  icon?: string;
}

const AppShortcut: React.FC<AppShortcutProps> = ({ appType, setOpen, icon }) => {
  const shownIcon = `url(assets/app_icons/${icon ?? `${appType.toLowerCase()}`}.png)`;
  const appTextColor: string = useSelector((state: IGameState) => state.styleData.text.app);
  return (
    <div style={{ color: appTextColor, textAlign: "center" }}>
      <div
        style={{
          color: appTextColor,
          background: shownIcon,
          width: "120px",
          height: "120px",
          backgroundSize: "cover",
          marginLeft: "auto",
          marginRight: "auto",
          imageRendering: "pixelated",
          fontSize: "2px"
        }}
        onClick={() => {
          setOpen(appType);
        }}
      ></div>
      {appType}
    </div>
  );
};

export default AppShortcut;
