import { useDispatch } from "react-redux";
import { useState } from "react";
import { puzzleSolve } from "../../slices/gameDataSlice";

export default function PuzzleSet1() {
  const [playerAnswer, setPlayerAnswer] = useState("");
  const [puzzleAnswerEffect, setPuzzleAnswer] = useState("");
  const dispatch = useDispatch();

  const correctAnswer = "<button> Collect All </button>";

  const answerPuzzle = () => {
    if (playerAnswer === correctAnswer) {
      setPuzzleAnswer("Solved");
      dispatch(puzzleSolve("Make a Collect All Button"));
    } else {
      setPuzzleAnswer("Wrong Answer, please try again");
    }
  };

  return (
    <div className={`normalLesson ${open && "showing"}`} style={{ color: "grey" }}>
      <h3 style={{ color: "black", textAlign: "left" }}>Puzzle 1: Make a Collect All Button</h3>
      <p>In this puzzle you will have to write a line of code to create a button that says "Collect All"</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <input style={{ width: "80%", marginLeft: "10%" }} onChange={(e) => setPlayerAnswer(e.target.value)}></input>
        <button onClick={answerPuzzle}>Submit</button>
      </form>

      <div>{puzzleAnswerEffect}</div>
    </div>
  );
}
