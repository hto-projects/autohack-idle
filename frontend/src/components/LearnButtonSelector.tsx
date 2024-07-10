import { useState, ReactNode } from "react";
import { ILesson } from "./learnObj";

interface LearnButtonSelectorProps {
  titleElements: ReactNode;
  lessons: ILesson[];
}
// const foo: ILesson = {
//   name: "Buttons in HTML",
//   element: <C1L1></C1L1>
// };

// const bar: LearnButtonSelectorProps = {
//   titleElements: (
//     <div className={"chapterText"}>
//       <h2> Chapter 1: Adding A Collect All Upgrade </h2>
//       <p> Complete this chapter to learn how to code an upgrade that allows you to collect all bits available. </p>
//     </div>
//   ),
//   lessons: [
//     {
//       name: "Buttons in HTML",
//       element: <C1L1></C1L1>
//     },
//     {
//       name: "Functions in Javascript",
//       element: <C1L2></C1L2>
//     }
//   ]
// };

export default function LearnButtonSelector({ titleElements, lessons }: LearnButtonSelectorProps) {
  const [visibleLesson, setVisibleLesson] = useState(-1);
  let selectorNode: ReactNode = undefined;

  if (visibleLesson === -1) {
    const buttons: ReactNode[] = [];
    for (let i = 0; i < lessons.length; i++) {
      buttons.push(
        <button onClick={() => setVisibleLesson(i)}>
          Lesson {i + 1}: {lessons[i].name}
        </button>
      );
    }
    selectorNode = (
      <>
        <div>{titleElements}</div>
        {buttons}
      </>
    );
  } else {
    const lesson = lessons[visibleLesson];
    selectorNode = (
      <>
        {lesson.element}
        <button onClick={() => setVisibleLesson(-1)} style={{ marginTop: ".5%" }}>
          Close Lesson
        </button>
      </>
    );
  }

  return selectorNode;
}
