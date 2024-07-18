export default function PuzzleSet1() {
  return (
    <div className={`normalLesson ${open && "showing"}`} style={{ color: "grey" }}>
      <h3 style={{ color: "black", textAlign: "left" }}>Puzzle 1: Make a Collect All Button</h3>
      <p>
        In this puzzle you will have to drag the blocks below into the correct order and location to make a button that
        reads "Collect All".
      </p>

      <input style={{ width: "80%", marginLeft: "10%" }}></input>
    </div>
  );
}
