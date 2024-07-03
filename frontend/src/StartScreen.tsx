export default function StartScreen({ setStartShown }) {
  return (
    <div id="start-screen" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <p>C:/AUTOHACK/IDLE</p>
      <button id="playButton" onClick={() => setStartShown(false)}>
        Play
      </button>
    </div>
  );
}
