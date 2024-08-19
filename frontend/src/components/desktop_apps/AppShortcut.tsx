import { AppType } from "../../../../shared/types";
import { useSelector } from "react-redux";
import { IGameState } from "../../store";
import { playSoundEffect } from "../../soundEffect";
import { ReactNode } from "react";

interface AppShortcutProps {
  appType: AppType;
  setOpen: (at: AppType) => void;
  icon?: string;
  useSmaller?: boolean;
  visible?: boolean;
}

export default function AppShortcut({ appType, setOpen, icon, useSmaller = false, visible = true }: AppShortcutProps) {
  const userTextSize = useSelector((state: IGameState) => state.styleData.textSize.app);
  const appTextColor = useSelector((state: IGameState) => state.styleData.textColor.app);
  const shownIcon = `url(assets/app_icons/${icon ?? `${appType.toLowerCase()}`}.png)`;
  const size = useSmaller ? "64px" : "120px";

  let appTextSize = "18px";
  if (!useSmaller) {
    if (userTextSize === null) {
      appTextSize = "20px";
    } else {
      appTextSize = userTextSize;
    }
  }

  return (
    <>
      {visible && (
        <div
          style={{
            color: appTextColor,
            fontSize: appTextSize,
            textAlign: "center"
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
              // flexWrap: "wrap",
              backgroundRepeat: "no-repeat"
            }}
            onClick={() => {
              setOpen(appType);
              playSoundEffect("open");
            }}
          ></div>
          <span className="appText"> {appType} </span>
        </div>
      )}
    </>
  );
}
