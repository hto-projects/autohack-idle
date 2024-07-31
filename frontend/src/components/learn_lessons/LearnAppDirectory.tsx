import { ReactNode } from "react";
import C1L1 from "./C1L1";
import C1L2 from "./C1L2";
import C1L3 from "./C1L3";
import C1L4 from "./C1L4";
import C1L5 from "./C1L5";

export interface ILesson {
  name: string;
  body: ReactNode;
}

export interface IChapter {
  name: string;
  description: string;
  lessons: ILesson[];
}

export interface ILearnModule {
  titleNode: ReactNode;
  chapters: IChapter[];
}

export interface LessonProps {
  title: string;
}

export const learnAppDirectory: ILearnModule = {
  titleNode: undefined,
  chapters: [
    {
      name: "Adding A Print All Button",
      description:
        "This chapter teaches you how to make a Print All button, with functionality, using For Loops and Arrays. This button is supposed to print all the pages that we need to print.  This can be used as an example for how to make the Collect All upgrade (Puzzle Set 1).",
      lessons: [
        {
          name: "Buttons in HTML",
          body: <C1L1></C1L1>
        },
        {
          name: "Functions in Javascript",
          body: <C1L2></C1L2>
        },
        {
          name: "Arrays in JavaScript",
          body: <C1L3></C1L3>
        },
        {
          name: "For Loops in Javascript",
          body: <C1L4></C1L4>
        },
        {
          name: "Final Code",
          body: <C1L5></C1L5>
        }
      ]
    },
    {
      name: "Coming Soon",
      description: "Not here yet!",
      lessons: []
    }
  ]
};
