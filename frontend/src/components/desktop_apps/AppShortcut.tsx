import React from "react";
import { AppType } from "../../../../shared/types";
import { useSelector } from "react-redux";
import { IGameState } from "../../store";
import { wrap } from "module";

interface AppShortcutProps {
  appType: AppType;
  setOpen: (at: AppType) => void;
  icon?: string;
  useSmaller?: boolean;
}

const AppShortcut: React.FC<AppShortcutProps> = ({ appType, setOpen, icon, useSmaller = false }) => {
  const shownIcon = `url(assets/app_icons/${icon ?? `${appType.toLowerCase()}`}.png)`;
  const size = useSmaller ? "64px" : "120px";
  const appTextColor: string = useSelector((state: IGameState) => state.styleData.textColor.app);
  const appTextSize = useSmaller ? "18px" : "20px";
  console.log(appTextSize);
  const appTextFont: string = useSelector((state: IGameState) => state.styleData.textFont.app);

  return (
    <div
      style={{
        color: appTextColor,
        textAlign: "center",
        fontSize: appTextSize,
        fontFamily: appTextFont
      }}
    >
      <div
        style={{
          color: appTextColor,
          background: shownIcon,
          width: size,
          height: size,
          backgroundSize: "cover",
          marginLeft: "auto",
          marginRight: "auto",
          imageRendering: "pixelated",
          fontSize: appTextSize,
          flexWrap: "wrap"
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
