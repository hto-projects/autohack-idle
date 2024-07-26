import { useState, ReactNode } from "react";
import { IPuzzle, IPuzzleSet, PuzzleAppDirectory } from "./PuzzleAppDirectory";
import { IGameData, PuzzleSolvedStatus, SetCompletedStatus } from "../../../../shared/types";
import { useSelector } from "react-redux";
import { IGameState } from "../../store";

export interface PuzzleContainerProps {
  titleElements: ReactNode;
  puzzles: IPuzzle[];
}

export default function PuzzleApp({ titleElements, puzzles }: PuzzleContainerProps) {
  let selectorNode: ReactNode = undefined;
  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  const [visiblePuzzle, setVisiblePuzzle] = useState(-1);

  const getPuzStatus = (checkedPuz: number, gameData: IGameData): PuzzleSolvedStatus => {
    if (gameData.savedSolvedPuzzles.includes(puzzles[checkedPuz].name)) {
      return PuzzleSolvedStatus.solved;
    }
    return PuzzleSolvedStatus.unsolved;
  };

  if (visiblePuzzle === -1) {
    const buttons: ReactNode[] = [];
    for (let i = 0; i < puzzles.length; i++) {
      buttons.push(
        <button onClick={() => setVisiblePuzzle(i)}>
          Puzzle {i + 1}: {puzzles[i].name} {getPuzStatus(i, gameData)}
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
