import { useDispatch } from "react-redux";
import { useState } from "react";
import { puzzleSolve } from "../../slices/gameDataSlice";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/esm/Form";

export default function PS1P1() {
  const [playerAnswer, setPlayerAnswer] = useState("");
  let devAnswer = "dev";
  let correctAnswer = '<button onClick = "collectAll()"> Collect All </button>';
  let [puzzleAnswerEffect, setPuzzleAnswer] = useState("");
  const dispatch = useDispatch();

  return (
    <div
      className={`normalLesson ${open && "showing"}`}
      style={{ color: "grey", scrollBehavior: "smooth", overflow: "auto" }}
    >
      <h3 style={{ color: "black", textAlign: "left" }}>Puzzle 1: Make a Collect All Button</h3>
      <p>
        In this puzzle you will have to write a line of code, in HTML, to create a button that says "Collect All". This
        button should also call the "collectAll()" function when clicked. For this puzzle, assume that this function
        already exists in the code base, and is within scope.
      </p>

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
      dispatch(puzzleSolve("Make a Collect All Button"));
    } else {
      setPuzzleAnswer("Wrong Answer, please try again");
    }
  }
}
