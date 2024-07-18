import { useState, ReactNode } from "react";
import { IPuzzle } from "./PuzzleAppDirectory";

interface PuzzleContainerProps {
  titleElements: ReactNode;
  puzzles: IPuzzle[];
}

export default function LearnLessonContainer({ titleElements, puzzles: puzzles }: PuzzleContainerProps) {
  const [visiblePuzzle, setVisiblePuzzle] = useState(-1);
  let selectorNode: ReactNode = undefined;

  if (visiblePuzzle === -1) {
    const buttons: ReactNode[] = [];
    for (let i = 0; i < puzzles.length; i++) {
      buttons.push(
        <button onClick={() => setVisiblePuzzle(i)}>
          Puzzle {i + 1}: {puzzles[i].name}
        </button>
      );
    }
    selectorNode = (
      <>
        <div>{titleElements}</div>
        {buttons}
      </>
    );
  } else {
    const puzzle = puzzles[visiblePuzzle];
    selectorNode = (
      <>
        {puzzle.body}
        <button onClick={() => setVisiblePuzzle(-1)} style={{ marginTop: ".5%" }}>
          Close Puzzle
        </button>
      </>
    );
  }

  return selectorNode;
}
