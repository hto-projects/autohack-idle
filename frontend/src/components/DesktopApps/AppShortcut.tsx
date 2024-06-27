import React from "react";
import { AppType } from "../../../../shared/types";

interface AppShortcutProps {
  appType: AppType;
  setOpen: (at: AppType) => void;
}

const AppShortcut: React.FC<AppShortcutProps> = ({ appType, setOpen }) => {
  return (
    <div
      style={{ color: "black", background: "red", width: "100px", height: "100px" }}
      onClick={() => {
        setOpen(appType);
      }}
    >
      App: {appType}
    </div>
  );
};

export default AppShortcut;
