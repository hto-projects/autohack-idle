import { ReactNode } from "react";

export enum PuzzleNames {
  // PSet1
  Collect_all_button = "Make a Collect All Button",
  Collect_all_function = "Make a Collect All Function",
  Bits_array = "Make a Bits Array",
  For_loop_to_collect_bits = "Make a For Loop to Collect Bits",
  Complete_collect_all_upgrade = "Make the Complete Collect All Upgrade",
  // PSet2
  Test = "Test"
}

enum Labels {
  JS = "Enter your JavaSript below",
  HTML = "Enter your HTML below",
  CSS = "Enter your CSS below",
  Code = "Enter your Code Below"
}

export interface IPuzzleQuestions {
  label: Labels | string;
  answers: string[];
}

export interface IPuzzle {
  name: PuzzleNames;
  description: string;
  questions: IPuzzleQuestions[];
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
          name: PuzzleNames.Collect_all_button,
          description:
            'In this puzzle you will have to write a line of code to create a button that says "Collect All"',
          questions: [{ label: Labels.HTML, answers: ["<button> Collect All </button>"] }]
        },
        {
          name: PuzzleNames.Collect_all_function,
          description:
            'In this puzzle you will have to write a line of code to create a button that says "Collect All"',
          questions: [
            {
              label: Labels.JS,
              answers: ['function collectAll() {prompt("You have collected all bits!"); return; }']
            }
          ]
        },
        {
          name: PuzzleNames.Bits_array,
          description:
            'In this puzzle you will have to write some code, in JavaScript, to make an array that contains 3 bits. \
            The array should be called "allBits" and should contain 3 bits like the following: [Bit1, Bit2, Bit3].',
          questions: [
            {
              label: Labels.JS,
              answers: ["const allBits = []; allBits[0] = Bit1; allBits[1] = Bit2; allBits[2] = Bit3;"]
            }
          ]
        },
        {
          name: PuzzleNames.For_loop_to_collect_bits,
          description:
            'In this puzzle you will have to write some code, in JavaScript, \
            to make a for loop that collects all of the Bits in the allBits array. \
            Assume that the allBits array is in scope of the for loop. To collect a Bit, use the Collect() function. \
            Note that the Collect() function also deletes the Bit it is called on. Name the control \
            variable "i", as this is coding convention. Hint: if you still are not getting the solution, make sure to \
            checkout the Learn app!',
          questions: [
            { label: Labels.JS, answers: ["for(int i = allBits.length-1; i >= 0; i--) { allBits[i].Collect(); }"] }
          ]
        },
        {
          name: PuzzleNames.Complete_collect_all_upgrade,
          description:
            'In this puzzle you will have to write the entire code to make the Collect All upgrade. This is a combination of \
        all of the previous puzzles in this puzzle set. Hint: Make sure to place the for loop you have made in puzzle 4 \
        into the function made in puzzle 2. Also, make sure to initialize the array outside of the function. Make sure \
        to hit "Check Both" at the end to unlock the Collect All upgrade.',
          questions: [
            { label: Labels.HTML, answers: ['<button onClick = "collectAll()"> Collect All </button>'] },
            {
              label: Labels.JS,
              answers: [
                "const allBits = [Bit1, Bit2, Bit3]; function collectAll() {for(int i = allBits.length-1; i >= 0; i--) { allBits[i].Collect(); } return; }"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Coming Soon",
      description: "Not here yet!",
      puzzles: [
        {
          name: PuzzleNames.Test,
          description: "idk",
          questions: [{ label: "test", answers: ["test"] }]
        }
      ]
    }
  ]
};
