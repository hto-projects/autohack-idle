import { useDispatch } from "react-redux";
import { useState } from "react";
import { puzzzleSolve } from "../../slices/gameDataSlice";

export default function PuzzleSet1() {
  const [playerAnswer, setPlayerAnswer] = useState("");
  const correctAnswer = "<button> Collect All </button>";
  let [puzzleAnswerEffect, setPuzzleAnswer] = useState("");
  const dispatch = useDispatch();

  return (
    <div className={`normalLesson ${open && "showing"}`} style={{ color: "grey" }}>
      <h3 style={{ color: "black", textAlign: "left" }}>Puzzle 1: Make a Collect All Button</h3>
      <p>In this puzzle you will have to write a line of code to create a button that says "Collect All"</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="string"
          id="answer"
          name="textArea"
          value={playerAnswer}
          style={{ width: "80%", marginLeft: "10%" }}
          onChange={(e) => setPlayerAnswer(e.target.value)}
        ></input>
        <button onClick={answerPuzzle}>Submit</button>
      </form>

      <div>
        <text style={{ color: "black", visibility: "visible" }}> {puzzleAnswerEffect.toString()} </text>{" "}
      </div>
    </div>
  );

  function answerPuzzle() {
    let puzzleAnswer = playerAnswer;
    if (puzzleAnswer == correctAnswer) {
      setPuzzleAnswer("Solved");
      dispatch(puzzzleSolve("Make a Collect All Button"));
    } else {
      setPuzzleAnswer("Wrong Answer, please try again");
    }
  }
}