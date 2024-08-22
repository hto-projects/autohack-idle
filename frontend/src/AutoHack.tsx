import { useState } from "react";
import StartScreen from "./StartScreen";
import Desktop from "./components/desktop_apps/Desktop";
import Taskbar from "./components/desktop_apps/Taskbar";
import HorizontalBar from "./components/HorizontalBar";
import VerticalBar from "./components/VerticalBar";

export default function AutoHack() {
  const [startShown, setStartShown] = useState<boolean>(true);

  if (startShown === true) {
    return <StartScreen setStartShown={setStartShown}></StartScreen>;
  }

  return (
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
