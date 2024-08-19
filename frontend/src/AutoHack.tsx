import { useState } from "react";
import StartScreen from "./StartScreen";
import Desktop from "./components/desktop_apps/Desktop";
import Taskbar from "./components/desktop_apps/Taskbar";
import HorizontalBar from "./components/desktop_apps/screens/HorizontalBar";
import VerticalBar from "./components/desktop_apps/screens/VerticalBar";
import { AppType } from "../../shared/types";
import React from "react";

export default function AutoHack() {
  const [startShown, setStartShown] = useState<boolean>(true);
  const [openWindow, setOpenWindow] = React.useState<AppType>(null);

  if (startShown === true) {
    return <StartScreen setStartShown={setStartShown}></StartScreen>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh", width: "100wh" }}>
      <VerticalBar></VerticalBar>
      <div id="auto-hack" style={{ display: "flex", flex: "96%", flexDirection: "column" }}>
        <HorizontalBar></HorizontalBar>
        <div style={{ flex: "95%" }}>
          <Desktop openWindow={openWindow} setOpenWindow={setOpenWindow}></Desktop>
        </div>
        <div style={{ flex: "5%" }}>
          <Taskbar setOpenWindow={setOpenWindow}></Taskbar>
        </div>
        <HorizontalBar></HorizontalBar>
      </div>
      <VerticalBar></VerticalBar>
    </div>
  );
}
