import { useState } from "react";
import StartScreen from "./StartScreen";
import Desktop from "./components/DesktopApps/Desktop";
import Taskbar from "./components/DesktopApps/Taskbar";
import HorizontalBar from "./components/DesktopApps/Screens/HorizontalBar";
import VerticalBar from "./components/DesktopApps/Screens/VerticalBar";

export default function AutoHack() {
  const [startShown, setStartShown] = useState<boolean>(true);
  if (startShown === true) {
    return <StartScreen setStartShown={setStartShown}></StartScreen>;
  } else
    return (
      // <div id="auto-hack" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      //   <div style={{ flex: "90%" }}>
      //     <Desktop></Desktop>
      //   </div>
      //   <div style={{ flex: "10%" }}>
      //     <Taskbar></Taskbar>
      //   </div>
      // </div>

      <div style={{ display: "flex", flexDirection: "row", height: "100vh", width: "100wh" }}>
        <VerticalBar></VerticalBar>
        <div id="auto-hack" style={{ display: "flex", flex: "96%", flexDirection: "column" }}>
          <HorizontalBar></HorizontalBar>
          <div style={{ flex: "95%" }}>
            <Desktop></Desktop>
          </div>
          <div style={{ flex: "5%" }}>
            <Taskbar></Taskbar>
          </div>
          <HorizontalBar></HorizontalBar>
        </div>
        <VerticalBar></VerticalBar>
      </div>
    );
}
