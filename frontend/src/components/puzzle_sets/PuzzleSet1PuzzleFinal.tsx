import { useDispatch } from "react-redux";
import { useState } from "react";
import { puzzleSolve } from "../../slices/gameDataSlice";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/esm/Form";

export default function PS1PFinal() {
  const [playerAnswerHTML, setPlayerAnswerHTML] = useState("");
  const [playerAnswerJS, setPlayerAnswerJS] = useState("");
  let devAnswer = "dev";
  let correctAnswerHTML = '<button onClick = "collectAll()"> Collect All </button>';
  let correctAnswerJS =
    "const allBits = [Bit1, Bit2, Bit3]; function collectAll() {for(int i = allBits.length-1; i >= 0; i--) { allBits[i].Collect(); } return; }";
  let [puzzleAnswerEffect, setPuzzleAnswer] = useState("");
  let [puzzleAnswerEffectHTML, setPuzzleAnswerHTML] = useState("");
  let [puzzleAnswerEffectJS, setPuzzleAnswerJS] = useState("");
  const dispatch = useDispatch();

  return (
    <div
      className={`normalLesson ${open && "showing"}`}
      style={{ color: "grey", scrollBehavior: "smooth", overflow: "auto" }}
    >
      <h3 style={{ color: "black", textAlign: "left" }}>Puzzle Final: Make the Complete Collect All Upgrade</h3>
      <p>
        In this puzzle you will have to write the entire code to make the Collect All upgrade. This is a combination of
        all of the previous puzzles in this puzzle set. Hint: Make sure to place the for loop you have made in puzzle 4
        into the function made in puzzle 2. Also, make sure to initialize the array outside of the function. Make sure
        to hit "Check Both" at the end to unlock the Collect All upgrade.
      </p>

      <Form>
        <Form.Group onSubmit={(e) => e.preventDefault()}>
          <Form.Label>Enter your HTML code below: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter code"
            id="answer"
            as="textarea"
            rows={1}
            value={playerAnswerHTML}
            onChange={(e) => setPlayerAnswerHTML(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={answerPuzzleHTML}> Check </Button>
        <div>
          <text style={{ color: "black", visibility: "visible" }}> {puzzleAnswerEffectHTML.toString()} </text>{" "}
        </div>

        <Form.Group onSubmit={(e) => e.preventDefault()}>
          <Form.Label>Enter your JavaScript code below: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter code"
            id="answer"
            as="textarea"
            rows={6}
            value={playerAnswerJS}
            onChange={(e) => setPlayerAnswerJS(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={answerPuzzleJS}> Check </Button>
        <div>
          <text style={{ color: "black", visibility: "visible" }}> {puzzleAnswerEffectJS.toString()} </text>{" "}
        </div>
        <p></p>
        <Button onClick={answerPuzzle}> Check Both </Button>
      </Form>

      <div>
        <text style={{ color: "black", visibility: "visible" }}> {puzzleAnswerEffect.toString()} </text>{" "}
      </div>
    </div>
  );

  function answerPuzzle() {
    let puzHTML = false;
    let puzJS = false;
    if (answerPuzzleHTML()) {
      puzHTML = true;
    }
    if (answerPuzzleJS()) {
      puzJS = true;
    }
    if (puzHTML && puzJS) {
      setPuzzleAnswer("Solved");
      dispatch(puzzleSolve("Make the Complete Collect All Upgrade"));
    } else {
      setPuzzleAnswer("Wrong Answer, please try again");
    }
  }

  function answerPuzzleHTML() {
    let puzzleAnswerHTML = playerAnswerHTML;
    puzzleAnswerHTML = puzzleAnswerHTML.replace(/\s/g, "");
    correctAnswerHTML = correctAnswerHTML.replace(/\s/g, "");
    if (puzzleAnswerHTML == devAnswer || puzzleAnswerHTML == correctAnswerHTML) {
      setPuzzleAnswerHTML("Solved");
      return true;
    } else {
      setPuzzleAnswerHTML("Wrong Answer, please try again");
      return false;
    }
  }

  function answerPuzzleJS() {
    let puzzleAnswerJS = playerAnswerJS;
    puzzleAnswerJS = puzzleAnswerJS.replace(/\s/g, "");
    correctAnswerJS = correctAnswerJS.replace(/\s/g, "");
    if (puzzleAnswerJS == devAnswer || puzzleAnswerJS == correctAnswerJS) {
      setPuzzleAnswerJS("Solved");
      return true;
    } else {
      setPuzzleAnswerJS("Wrong Answer, please try again");
      return false;
    }
  }
}
