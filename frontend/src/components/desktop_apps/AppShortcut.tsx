import { AppType } from "../../../../shared/types";
import { useSelector } from "react-redux";
import { IGameState } from "../../store";

interface AppShortcutProps {
  appType: AppType;
  setOpen: (at: AppType) => void;
  icon?: string;
  useSmaller?: boolean;
}

export default function AppShortcut({ appType, setOpen, icon, useSmaller = false }: AppShortcutProps) {
  const appTextColor = useSelector((state: IGameState) => state.styleData.textColor.app);
  const appTextFont = useSelector((state: IGameState) => state.styleData.textFont.app);

  const shownIcon = `url(assets/app_icons/${icon ?? `${appType.toLowerCase()}`}.png)`;
  const size = useSmaller ? "64px" : "120px";
  const appTextSize = useSmaller ? "18px" : "20px";

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
}
