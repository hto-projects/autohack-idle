import { ReactNode, useState } from "react";
import { IPuzzle, IPuzzleQuestions } from "./PuzzleAppDirectory";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/esm/Form";

interface IPuzzleProps {
  index: number;
  puzzle: IPuzzle;
}

// interface IAnswer {
//   isSolved: boolean;
//   playerAnswer: string;
// }

export default function Puzzle({ index, puzzle }: IPuzzleProps) {
  const [playerAnswers, setPlayerAnswers] = useState<string[]>(new Array(puzzle.questions.length).fill(""));
  const [puzzleSolved, setPuzzleSolved] = useState<boolean>(false);
  const solvedArr: boolean[] = new Array(puzzle.questions.length).fill(false);

  const answerResultText = ["Wrong answer, please try again", "Correct!"];
  const puzzleNodes: ReactNode[] = undefined;
  for (let i = 0; i < puzzle.questions.length; i++) {
    // const currQuestion = puzzle.questions[i];
    puzzleNodes.push(
      <>
        <Form.Group onSubmit={(e) => e.preventDefault()}>
          <Form.Label>{puzzle.questions[i].label}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter code"
            id="answer"
            as="textarea"
            rows={1}
            value={playerAnswers[i]}
            onChange={(e) => {
              playerAnswers[i] = e.target.value;
              setPlayerAnswers([...playerAnswers]);
            }}
          ></Form.Control>
        </Form.Group>
        <Button
          onClick={() => {
            const playerAnswer = playerAnswers[i].trim();
            let solved = false;
            for (const answer of puzzle.questions[i].answers) {
              if (playerAnswer === answer) {
                solved = true;
                break;
              }
              solvedArr[i] = solved;
            }
          }}
        >
          {" Check "}
        </Button>
        <div>
          <text style={{ color: "black", visibility: "visible" }}> {answerResultText[+solvedArr[i]]}</text>
        </div>
      </>
    );
  }

  return (
    <div className={`normalLesson ${open && "showing"}`} style={{ color: "grey" }}>
      <h3 style={{ color: "black", textAlign: "left" }}>{`Puzzle ${index}: ${puzzle.name}`}</h3>
      <p>{puzzle.description}</p>

      <Form>{puzzleNodes}</Form>
      <div>{answerResultText[+puzzleSolved]}</div>
    </div>
  );
}
