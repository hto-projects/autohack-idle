import { useState, ReactNode } from "react";
import { IPuzzle } from "./PuzzleAppDirectory";
import { PuzzleSolvedStatus } from "../../../../shared/types";
import { useSelector } from "react-redux";
import { IGameState } from "../../store";
import { IGameData } from "../../slices/gameDataSlice";
import Puzzle from "./Puzzle";

interface IPuzzleContainerProps {
  titleElements: ReactNode;
  puzzles: IPuzzle[];
}

export default function PuzzleContainer({ titleElements, puzzles }: IPuzzleContainerProps) {
  let node: ReactNode = undefined;
  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  const [visiblePuzzle, setVisiblePuzzle] = useState(-1);

  const getPuzStatus = (checkedPuz: number): PuzzleSolvedStatus => {
    if (gameData.solvedPuzzles.includes(puzzles[checkedPuz].name)) {
      return PuzzleSolvedStatus.solved;
    }
    return PuzzleSolvedStatus.unsolved;
  };

  if (visiblePuzzle === -1) {
    const buttons: ReactNode[] = [];
    for (let i = 0; i < puzzles.length; i++) {
      const currPuzName = puzzles[i].name;
      buttons.push(
        <button
          key={currPuzName}
          onClick={() => setVisiblePuzzle(i)}
          style={{ fontSize: "18px", width: "40%", height: "8%", borderWidth: "3px", marginBottom: "1%" }}
        >
          Puzzle {i + 1}: {currPuzName} {getPuzStatus(i)}
        </button>
      );
    }
    node = (
      <>
        <div>{titleElements}</div>
        {buttons}
      </>
    );
  } else {
    const puzzle = puzzles[visiblePuzzle];
    node = (
      <>
        <Puzzle index={visiblePuzzle} puzzle={puzzle}></Puzzle>
        <button onClick={() => setVisiblePuzzle(-1)} style={{ marginTop: ".5%" }}>
          Close Puzzle
        </button>
      </>
    );
  }

  return node;
}
