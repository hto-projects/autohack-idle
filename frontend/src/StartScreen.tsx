export default function StartScreen({ setStartShown }) {
  return (
    <div id="start-screen" style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p>C:/AUTOHACK/IDLE</p>
      <div id="space"></div>
      <button id="playButton" onClick={() => setStartShown(false)}>
        Play
      </button>
      <div id="space2"></div>
    </div>
  );
}
