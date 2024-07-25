import React from "react";
import { AppType } from "../../../../shared/types";

interface AppShortcutProps {
  appType: AppType;
  setOpen: (at: AppType) => void;
  icon?: string;
  useSmaller?: boolean;
}

const AppShortcut: React.FC<AppShortcutProps> = ({ appType, setOpen, icon, useSmaller = false }) => {
  const shownIcon = `url(assets/app_icons/${icon ?? `${appType.toLowerCase()}`}.png)`;
  const size = useSmaller ? "64px" : "120px";

  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <div
        style={{
          color: "white",
          background: shownIcon,
          width: size,
          height: size,
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
