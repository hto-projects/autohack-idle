import React from "react";
import { AppType } from "../../../../shared/types";

interface AppShortcutProps {
  appType: AppType;
  setOpen: (at: AppType) => void;
  icon?: string;
}

const AppShortcut: React.FC<AppShortcutProps> = ({ appType, setOpen, icon }) => {
  const shownIcon = `url(assets/app_icons/${icon ?? `${appType.toLowerCase()}`}.png)`;

  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <div
        style={{
          color: "white",
          background: shownIcon,
          width: "120px",
          height: "120px",
          backgroundSize: "cover",
          marginLeft: "auto",
          marginRight: "auto",
          imageRendering: "pixelated"
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
