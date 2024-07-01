import Desktop from "./components/DesktopApps/Desktop";
import Taskbar from "./components/DesktopApps/Taskbar";
import VerticalBar from "./components/DesktopApps/VerticalBar";
import HorizontalBar from "./components/DesktopApps/HorizontalBar";

export default function AutoHack() {
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
