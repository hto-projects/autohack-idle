import { useState, ReactNode } from "react";
import { IPuzzleModule } from "./puzzle_sets/PuzzleAppDirectory";
import PuzzleContainer from "./puzzle_sets/PuzzleContainer";

interface PuzzleAppContainerProps {
  puzzleObj: IPuzzleModule;
}

export default function PuzzleAppContainer({ puzzleObj }: PuzzleAppContainerProps) {
  const [visiblePuzzleSets, setVisiblePuzzleSet] = useState(-1);
  let node: ReactNode = undefined;

  if (visiblePuzzleSets === -1) {
    const buttons: ReactNode[] = [];
    for (let i = 0; i < puzzleObj.puzzleSets.length; i++) {
      buttons.push(
        <button onClick={() => setVisiblePuzzleSet(i)}>
          Set {i + 1}: {puzzleObj.puzzleSets[i].name}
        </button>
      );
    }
    node = (
      <>
        <div>{puzzleObj.titleNode}</div>
        {buttons}
      </>
    );
  } else {
    const puzzleSet = puzzleObj.puzzleSets[visiblePuzzleSets];
    node = (
      <>
        <PuzzleContainer
          titleElements={
            <div>
              <h3>{puzzleSet.name}</h3>
              <p>{puzzleSet.description}</p>
            </div>
          }
          puzzles={puzzleSet.puzzles}
        ></PuzzleContainer>
        <button onClick={() => setVisiblePuzzleSet(-1)} style={{ marginTop: ".5%" }}>
          Close Set
        </button>
      </>
    );
  }

  return <div className={"learnContainer"}>{node}</div>;
}
