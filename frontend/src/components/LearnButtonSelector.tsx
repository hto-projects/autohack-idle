import { useState, ReactNode } from "react";
import { ILesson } from "./Learn Lessons/learnObj";

interface LearnButtonSelectorProps {
  titleElements: ReactNode;
  lessons: ILesson[];
}

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
        {lesson.body}
        <button onClick={() => setVisibleLesson(-1)} style={{ marginTop: ".5%" }}>
          Close Lesson
        </button>
      </>
    );
  }

  return selectorNode;
}
