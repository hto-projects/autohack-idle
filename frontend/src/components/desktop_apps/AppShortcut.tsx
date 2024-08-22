import { AppType } from "../../../../shared/types";
import { useSelector } from "react-redux";
import { IGameState } from "../../store";
import { playSoundEffect } from "../../soundEffect";

interface AppShortcutProps {
  appType: AppType;
  setOpen: (at: AppType) => void;
  icon?: string;
  useSmaller?: boolean;
  visible?: boolean;
}

export default function AppShortcut({ appType, setOpen, icon, useSmaller = false, visible = true }: AppShortcutProps) {
  const appTextColor = useSelector((state: IGameState) => state.styleData.textColor.app);
  const shownIcon = `url(assets/app_icons/${icon ?? `${appType.toLowerCase()}`}.png)`;
  const size = useSmaller ? "64px" : "120px";
  const appTextSize = setSize(useSmaller);

  if (visible === false) {
    return <></>;
  }

  return (
    <div
      style={{
        color: appTextColor,
        textAlign: "center",
        fontSize: appTextSize,
        fontFamily: "PixeloidMono"
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
          flexWrap: "wrap",
          backgroundRepeat: "no-repeat"
        }}
        onClick={() => {
          setOpen(appType);
          playSoundEffect("open");
        }}
      ></div>
      <p id="appText"> {appType} </p>
    </div>
  );
}

function setSize(useSmaller: boolean) {
  let size = "18px";
  let userTextSize = useSelector((state: IGameState) => state.styleData.textSize.app);
  if (!useSmaller) {
    if (userTextSize === null) {
      size = "20px";
    } else {
      size = userTextSize;
    }
  }
  return size;
}
