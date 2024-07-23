import { ReactNode } from "react";
import PuzzleSet1 from "./PuzzleSet1Puzzle1";
import { IPuzzleData, PuzzleSolvedStatus, SetCompletedStatus } from "../../../../shared/types";
import gameDataSlice from "../../slices/gameDataSlice";
import { IGameData } from "../../../../shared/types";
import { IGameState } from "../../store";
import { useSelector } from "react-redux";
import PuzzleSet2 from "./PuzzleSet1Puzzle2";
import PuzzleApp from "./PuzzleContainer";
import { PuzzleContainerProps } from "./PuzzleContainer";

export interface IPuzzle {
  name: string;
  body: ReactNode;
}

export interface IPuzzleSet {
  name: string;
  description: string;
  puzzles: IPuzzle[];
}

export interface IPuzzleModule {
  titleNode: ReactNode;
  puzzleSets: IPuzzleSet[];
}

export const PuzzleAppDirectory: IPuzzleModule = {
  titleNode: undefined,
  puzzleSets: [
    {
      name: "Collect All Upgrade",
      description: "Complete this puzzle set to unlock the collect all upgrade.",
      puzzles: [
        {
          name: "Make a Collect All Button",
          body: <PuzzleSet1></PuzzleSet1>
        },
        {
          name: "Test",
          body: <PuzzleSet2></PuzzleSet2>
        }
      ]
    },
    {
      name: "Coming Soon",
      description: "Not here yet!",
      puzzles: [
        {
          name: "est",
          body: <PuzzleSet2></PuzzleSet2>
        }
      ]
    }
  ]
};
