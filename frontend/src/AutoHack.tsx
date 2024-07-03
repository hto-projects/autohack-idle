import { useState } from "react";
import StartScreen from "./StartScreen";
import Desktop from "./components/DesktopApps/Desktop";
import Taskbar from "./components/DesktopApps/Taskbar";

export default function AutoHack() {
  const [startShown, setStartShown] = useState<boolean>(true);
  if (startShown === true) {
    return <StartScreen setStartShown={setStartShown}></StartScreen>;
  } else
    return (
      <div id="auto-hack" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <div style={{ flex: "90%" }}>
          <Desktop></Desktop>
        </div>
        <div style={{ flex: "10%" }}>
          <Taskbar></Taskbar>
        </div>
      </div>
    );
}
