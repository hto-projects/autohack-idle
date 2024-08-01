import { useDispatch } from "react-redux";
import { ReactNode, useState } from "react";
import { IPuzzle } from "./PuzzleAppDirectory";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/esm/Form";
import { puzzleSolve } from "../../slices/gameDataSlice";

interface IPuzzleProps {
  index: number;
  puzzle: IPuzzle;
}

interface IPlayerAnswer {
  answer: string;
  isSolved: boolean;
  resultText: string;
}

export default function Puzzle({ index, puzzle }: IPuzzleProps) {
  const playerAnswerBuf = Array(puzzle.questions.length);
  for (let i = 0; i < playerAnswerBuf.length; i++) {
    playerAnswerBuf[i] = { answer: "", isSolved: false, resultText: "" };
  }
  const [playerAnswers, setPlayerAnswers] = useState<IPlayerAnswer[]>(playerAnswerBuf);
  const [puzzleSolvedText, setPuzzleSolvedText] = useState<string>("");
  const dispatch = useDispatch();

  const checkIfPuzzleComplete = () => {
    for (const answer of playerAnswers) {
      if (!answer.isSolved) {
        return;
      }
    }
    dispatch(puzzleSolve(puzzle.name));
    setPuzzleSolvedText("Puzzle Solved!");
  };

  const puzzleNodes: ReactNode[] = [];
  for (let i = 0; i < puzzle.questions.length; i++) {
    puzzleNodes.push(
      <div key={i}>
        <Form.Group className="mb-6" onSubmit={(e) => e.preventDefault()}>
          <Form.Label style={{ width: "100%" }}>
            {puzzle.questions[i].label}
            <Form.Control
              type="text"
              placeholder="Enter code"
              id={`answer: ${i}`}
              as="textarea"
              rows={5}
              value={playerAnswers[i].answer}
              onChange={(e) => {
                playerAnswers[i].answer = e.target.value;
                setPlayerAnswers([...playerAnswers]);
              }}
              style={{ backgroundColor: "black", color: "#39ff14" }}
            ></Form.Control>
          </Form.Label>
        </Form.Group>
        <Button
          onClick={() => {
            const currAnswer = playerAnswers[i].answer.replace(/\s/g, "");
            let solved = false;
            for (const answer of puzzle.questions[i].answers) {
              // DELETE THE OR === "dev" IN PROD
              if (currAnswer === answer.replace(/\s/g, "") || currAnswer === "dev") {
                solved = true;
                break;
              }
            }
            playerAnswers[i].isSolved = solved;
            playerAnswers[i].resultText = solved ? "Correct!" : "Wrong answer, please try again";
            setPlayerAnswers([...playerAnswers]);
            checkIfPuzzleComplete();
          }}
        >
          {" Check "}
        </Button>
        <p></p>
        <span>{playerAnswers[i].resultText}</span>
      </div>
    );
  }

  return (
    <div
      className={`normalLesson ${open && "showing"}`}
      style={{ color: "grey", scrollBehavior: "smooth", overflow: "auto", height: "80%", width: "80%" }}
    >
      <h3 style={{ color: "black", textAlign: "left" }}>{`Puzzle ${index + 1}: ${puzzle.name}`}</h3>
      <p>{puzzle.description}</p>
      <Form>{puzzleNodes}</Form>
      <div>{puzzleSolvedText}</div>
    </div>
  );
}
