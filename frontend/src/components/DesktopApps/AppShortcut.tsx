import React from "react";
import { AppType } from "../../../../shared/types";

interface AppShortcutProps {
  appType: AppType;
  setOpen: (at: AppType) => void;
  icon: any;
}

const AppShortcut: React.FC<AppShortcutProps> = ({ appType, setOpen, icon }) => {
  let shownIcon = `url(${icon})`;

  return (
    <>
      <div style={{ color: "white", textAlign: "center" }}>
        <div
          style={{
            color: "white",
            background: shownIcon,
            width: "120px",
            height: "120px",
            backgroundSize: "cover",
            marginLeft: "auto",
            marginRight: "auto"
          }}
          onClick={() => {
            setOpen(appType);
          }}
        ></div>
        {appType}
      </div>
    </>
  );
};

export default AppShortcut;
