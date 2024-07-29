import { useDispatch } from "react-redux";
import { useState } from "react";
import { puzzzleSolve } from "../../slices/gameDataSlice";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/esm/Form";

export default function PS1P4() {
  const [playerAnswer, setPlayerAnswer] = useState("");
  let correctAnswer = "for(int i = allBits.length-1; i >= 0; i--) { allBits[i].Collect(); } ";
  let [puzzleAnswerEffect, setPuzzleAnswer] = useState("");
  const dispatch = useDispatch();

  return (
    <div
      className={`normalLesson ${open && "showing"}`}
      style={{ color: "grey", scrollBehavior: "smooth", overflow: "auto" }}
    >
      <h3 style={{ color: "black", textAlign: "left" }}>Puzzle 4: Make a For Loop to Collect all Bits</h3>
      <p>
        In this puzzle you will have to write some code, in JavaScript, to make a for loop that collects all of the Bits
        in the allBits array. Assume that the allBits array is in scope of the for loop. To collect a Bit, use the
        Collect() function. Note that the Collect() function also deletes the Bit it is called on. Name the control
        variable "i", as this is coding convention. Hint: if you still are not getting the solution, make sure to
        checkout the Learn app!{" "}
      </p>

      <Form>
        <Form.Group onSubmit={(e) => e.preventDefault()}>
          <Form.Label>Enter your code below: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter code"
            id="answer"
            as="textarea"
            rows={3}
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
    if (puzzleAnswer == correctAnswer) {
      setPuzzleAnswer("Solved");
      dispatch(puzzzleSolve("Make a For Loop to Collect all Bits"));
    } else {
      setPuzzleAnswer("Wrong Answer, please try again");
    }
  }
}
