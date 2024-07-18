import { ReactNode } from "react";
import PuzzleSet1 from "./PuzzleSet1";

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
        }
      ]
    },
    {
      name: "Coming Soon",
      description: "Not here yet!",
      puzzles: []
    }
  ]
};
