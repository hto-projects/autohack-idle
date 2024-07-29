import { useDispatch } from "react-redux";
import { useState } from "react";
import { puzzzleSolve } from "../../slices/gameDataSlice";
import Form from "react-bootstrap/esm/Form";
import { Button } from "react-bootstrap";

export default function PS1P2() {
  const [playerAnswer, setPlayerAnswer] = useState("");
  let devAnswer = "dev";
  let correctAnswer = 'function collectAll() {prompt("You have collected all bits!"); return; }';
  let [puzzleAnswerEffect, setPuzzleAnswer] = useState("");
  const dispatch = useDispatch();

  return (
    <div
      className={`normalLesson ${open && "showing"}`}
      style={{ color: "grey", scrollBehavior: "smooth", overflow: "auto" }}
    >
      <h3 style={{ color: "black", textAlign: "left" }}>Puzzle 2: Make a Collect All Button</h3>
      <p>
        In this puzzle you will have to write some code, in JavaScript, to create a collectAll() function. This funtion
        should prompt the message "You have collected all bits!" and return nothing.
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
        <p style={{ color: "black", visibility: "visible" }}> {puzzleAnswerEffect.toString()} </p>{" "}
      </div>
    </div>
  );

  function answerPuzzle() {
    let puzzleAnswer = playerAnswer;
    puzzleAnswer = puzzleAnswer.replace(/\s/g, "");
    correctAnswer = correctAnswer.replace(/\s/g, "");
    if (puzzleAnswer == devAnswer || puzzleAnswer == correctAnswer) {
      setPuzzleAnswer("Solved");
      dispatch(puzzzleSolve("Make a Collect All Function"));
    } else {
      setPuzzleAnswer("Wrong Answer, please try again");
    }
  }
}
