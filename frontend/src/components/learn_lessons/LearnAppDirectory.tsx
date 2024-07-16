import { ReactNode } from "react";
import C1L1 from "./C1L1";
import C1L2 from "./C1L2";

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

export const learnAppDirectory: ILearnModule = {
  titleNode: undefined,
  chapters: [
    {
      name: "Collect All Upgrade",
      description:
        "Complete this chapter to learn how to code an upgrade that allows you to collect all bits available.",
      lessons: [
        {
          name: "Buttons in HTML",
          body: <C1L1></C1L1>
        },
        {
          name: "Functions in Javascript",
          body: <C1L2></C1L2>
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
