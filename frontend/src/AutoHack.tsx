import Desktop from "./components/DesktopApps/Desktop";
import Taskbar from "./components/DesktopApps/Taskbar";

export default function AutoHack() {
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
