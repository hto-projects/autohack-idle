import { ReactNode } from "react";
import PS1P1 from "./PuzzleSet1Puzzle1";
import PS1P2 from "./PuzzleSet1Puzzle2";
import PS0PTest from "./PuzzleSet0PuzzleTest";
import PS1P3 from "./PuzzleSet1Puzzle3";
import PS1P4 from "./PuzzleSet1Puzzle4";
import PS1PFinal from "./PuzzleSet1PuzzleFinal";

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
          body: <PS1P1></PS1P1>
        },
        {
          name: "Make a Collect All Function",
          body: <PS1P2></PS1P2>
        },
        {
          name: "Make a Bits Array",
          body: <PS1P3></PS1P3>
        },
        {
          name: "Make a For Loop to Collect all Bits",
          body: <PS1P4></PS1P4>
        },
        {
          name: "Make the Complete Collect All Upgrade",
          body: <PS1PFinal></PS1PFinal>
        }
      ]
    },
    {
      name: "Coming Soon",
      description: "Not here yet!",
      puzzles: [
        {
          name: "Test Puzzle",
          body: <PS0PTest></PS0PTest>
        }
      ]
    }
  ]
};
