import { useDispatch } from "react-redux";
import { useState } from "react";
import { puzzzleSolve } from "../../slices/gameDataSlice";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/esm/Form";

export default function PS0PTest() {
  const [playerAnswer, setPlayerAnswer] = useState("");
  let devAnswer = "dev";
  let correctAnswer = "Test";
  let [puzzleAnswerEffect, setPuzzleAnswer] = useState("");
  const dispatch = useDispatch();

  return (
    <div
      className={`normalLesson ${open && "showing"}`}
      style={{ color: "grey", scrollBehavior: "smooth", overflow: "auto" }}
    >
      <h3 style={{ color: "black", textAlign: "left" }}>Puzzle TEST: TEST</h3>
      <p>In this puzzle you will have to write TEST TEST TEST TEST. Answer is Test.</p>

      <Form>
        <Form.Group onSubmit={(e) => e.preventDefault()}>
          <Form.Label>Enter your code below: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter code"
            id="answer"
            as="textarea"
            rows={1}
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
    correctAnswer = correctAnswer.replace(/\s/g, "");
    if (puzzleAnswer == devAnswer || puzzleAnswer == correctAnswer) {
      setPuzzleAnswer("Solved");
      dispatch(puzzzleSolve("Test Puzzle"));
    } else {
      setPuzzleAnswer("Wrong Answer, please try again");
    }
  }
}
