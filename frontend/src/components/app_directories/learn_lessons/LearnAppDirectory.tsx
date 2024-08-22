import { IModule } from "../directoryTypes";
import C1L1 from "./C1L1";
import C1L2 from "./C1L2";
import C1L3 from "./C1L3";
import C1L4 from "./C1L4";
import C1L5 from "./C1L5";
import C2L1 from "./C2L1";
import C2L2 from "./C2L2";
import C2L3 from "./C2L3";

export const learnAppDirectory: IModule = {
  names: {
    module: "Learn",
    section: "Chapter",
    segment: "Lesson"
  },
  titleText:
    "Choose a chapter to learn about some coding principles. This knowlege \
     may come in handy when trying to complete the puzzles in Puzzle.",
  genSectionText: function (i, name) {
    return `Chapter ${i + 1}: ${name}`;
  },
  genSegmentText: function (i, name) {
    return `Lesson ${i + 1}: ${name}`;
  },
  sections: [
    {
      name: "Adding A Print All Button",
      description:
        "This chapter teaches you how to make a Print All button, with functionality, using For Loops and Arrays. This button is supposed to print all the pages that we need to print.  This can be used as an example for how to make the Collect All upgrade (Puzzle Set 1).",
      segments: [
        {
          kind: "lesson",
          name: "Buttons in HTML",
          body: <C1L1></C1L1>
        },
        {
          kind: "lesson",
          name: "Functions in Javascript",
          body: <C1L2></C1L2>
        },
        {
          kind: "lesson",
          name: "Arrays in JavaScript",
          body: <C1L3></C1L3>
        },
        {
          kind: "lesson",
          name: "For Loops in Javascript",
          body: <C1L4></C1L4>
        },
        {
          kind: "lesson",
          name: "Final Code",
          body: <C1L5></C1L5>
        }
      ]
    },
    {
      name: "Stylizing in CSS",
      description:
        "This chapter will teach you about CSS (Cascading Style Sheet) and how it can be used to change what a webpage looks like. CSS is often used alongside HTML, and usually changes different elements in HTML using certain identifiers. This chapter can help you solve the puzzles in puzzle set 2.",
      segments: [
        {
          kind: "lesson",
          name: "Changing Colors",
          body: <C2L1></C2L1>
        },
        {
          kind: "lesson",
          name: "Changing Specific Elements",
          body: <C2L2></C2L2>
        },
        {
          kind: "lesson",
          name: "Final Code",
          body: <C2L3></C2L3>
        }
      ]
    }
  ]
};
