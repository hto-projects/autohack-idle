import { ReactNode } from "react";
import PuzzleSet1 from "./PS1P1";
import PuzzleSet2 from "./PS1P2";

export interface IPuzzle {
  name: string;
  description: string;
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
          description:
            'In this puzzle you will have to write a line of code to create a button that says "Collect All"',
          body: <PuzzleSet1></PuzzleSet1>
        },
        {
          name: "Test",
          description:
            'In this puzzle you will have to write a line of code to create a button that says "Collect All"',
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
          description: "idk",
          body: <PuzzleSet2></PuzzleSet2>
        }
      ]
    }
  ]
};
