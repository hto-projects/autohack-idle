import { ReactNode } from "react";

export enum PuzzleNames {
  // PSet1
  Collect_all_button = "Make a Collect All Button",
  Collect_all_function = "Make a Collect All Function",
  Bits_array = "Make a Bits Array",
  For_loop_to_collect_bits = "Make a For Loop to Collect Bits",
  Complete_collect_all_upgrade = "Make the Complete Collect All Upgrade",
  // PSet2
  Change_Colors = "Change the Color Scheme of Website",
  Change_Text = "Change the Way Text Looks"
}

enum Labels {
  JS = "Enter your JavaSript below:",
  HTML = "Enter your HTML below:",
  CSS = "Enter your CSS below:",
  Code = "Enter your Code below:"
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
  titleNode: (
    <div>
      <h3> Puzzle Sets: </h3>
      <p style={{ marginRight: "5%", marginLeft: "5%" }}>
        Choose which puzzle set you want to try to solve. Once all of the puzzles in a puzzle set are solved, you may
        unlock a new feature!
      </p>
    </div>
  ),
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
            'In this puzzle you will have to write some code, in JavaScript, to create a collectAll() function.  \
            This funtion should prompt the message "You have collected all bits!" and return nothing.',
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
            "In this puzzle you will have to write the entire code to make the Collect All upgrade. This is a combination of \
        all of the previous puzzles in this puzzle set. Hint: Make sure to place the for loop you have made in puzzle 4 \
        into the function made in puzzle 2. Also, make sure to initialize the array outside of the function.",
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
      name: "CSS Stylizing",
      description: "Complete these puzzle sets to unlock an app that lets you customize your game!",
      puzzles: [
        {
          name: PuzzleNames.Change_Colors,
          description:
            "Assume that you have a blank webpage with a title. Change the background of that website to \
             black, and the color of all text on that website to white. Follow these steps in chronological order.",
          questions: [{ label: Labels.CSS, answers: ["body {background-color: black; color: white;}"] }]
        },
        {
          name: PuzzleNames.Change_Text,
          description:
            'Assume that you have a black webpage with a white text. There is a title, made using the h1 element, and a paragraph, made using the p element. \
            Change all titles on that webpage to be of size 40px. Also, change the first paragrapgh element, which has an id of "firstPara" to be the font Courier \
             New. Follow these steps in chronological order.',
          questions: [{ label: Labels.CSS, answers: ["h1 {font-size: 40px;} #firstPara {font-family: Courier New;}"] }]
        }
      ]
    }
  ]
};
