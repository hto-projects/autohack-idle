import { useDispatch } from "react-redux";
import { useState } from "react";
import { puzzleSolve } from "../../slices/gameDataSlice";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/esm/Form";

export default function PS1P3() {
  const [playerAnswer, setPlayerAnswer] = useState("");
  let devAnswer = "dev";
  let correctAnswer1 = "const allBits = [Bit1, Bit2, Bit3];";
  let correctAnswer2 = "const allBits = []; allBits[0] = Bit1; allBits[1] = Bit2; allBits[2] = Bit3;";
  let [puzzleAnswerEffect, setPuzzleAnswer] = useState("");
  const dispatch = useDispatch();

  return (
    <div
      className={`normalLesson ${open && "showing"}`}
      style={{ color: "grey", scrollBehavior: "smooth", overflow: "auto" }}
    >
      <h3 style={{ color: "black", textAlign: "left" }}>Puzzle 3: Make a Bits Array</h3>
      <p>
        In this puzzle you will have to write some code, in JavaScript, to make an array that contains 3 bits. The array
        should be called "allBits" and should contain 3 bits like the following: [Bit1, Bit2, Bit3].
      </p>

      <Form>
        <Form.Group onSubmit={(e) => e.preventDefault()}>
          <Form.Label>Enter your code below: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter code"
            id="answer"
            as="textarea"
            rows={4}
            value={playerAnswer}
            onChange={(e) => setPlayerAnswer(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={answerPuzzle}> Check </Button>
      </Form>
      <div>
        <text style={{ color: "black", visibility: "visible" }}> {puzzleAnswerEffect.toString()} </text>{" "}
      </div>
    </div>
  );

  function answerPuzzle() {
    let puzzleAnswer = playerAnswer;
    puzzleAnswer = puzzleAnswer.replace(/\s/g, "");
    correctAnswer1 = correctAnswer1.replace(/\s/g, "");
    correctAnswer2 = correctAnswer2.replace(/\s/g, "");
    if (puzzleAnswer == devAnswer || puzzleAnswer == correctAnswer1 || puzzleAnswer == correctAnswer2) {
      setPuzzleAnswer("Solved");
      dispatch(puzzleSolve("Make a Bits Array"));
    } else {
      setPuzzleAnswer("Wrong Answer, please try again");
    }
  }
}
