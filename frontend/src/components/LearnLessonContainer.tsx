import { useState, ReactNode } from "react";
import { ILesson } from "./learn_lessons/LearnAppDirectory";

interface LearnLessonContainerProps {
  titleElements: ReactNode;
  lessons: ILesson[];
  closeChapter: () => void;
}

export default function LearnLessonContainer({ titleElements, lessons, closeChapter }: LearnLessonContainerProps) {
  const [visibleLesson, setVisibleLesson] = useState(-1);
  let selectorNode: ReactNode = undefined;

  if (visibleLesson === -1) {
    const buttons: ReactNode[] = [];
    for (let i = 0; i < lessons.length; i++) {
      const lessonName = lessons[i].name;
      buttons.push(
        <button key={lessonName} onClick={() => setVisibleLesson(i)}>
          Lesson {i + 1}: {lessonName}
        </button>
      );
    }
    selectorNode = (
      <>
        <div>{titleElements}</div>
        {buttons}
        <button onClick={closeChapter} style={{ marginTop: "10px" }}>
          Close Chapter
        </button>
      </>
    );
  } else {
    const lesson = lessons[visibleLesson];
    selectorNode = (
      <>
        <div className={`normalLesson ${open && "showing"}`} style={{ color: "grey" }}>
          <div style={{ display: "flex" }}>
            <h3 style={{ color: "black", textAlign: "left" }}>
              Lesson {visibleLesson + 1}: {lesson.name}
            </h3>
            <button
              onClick={() => setVisibleLesson(-1)}
              style={{ marginBottom: "10px", marginRight: "3px", marginLeft: "3px" }}
            >
              Close Lesson
            </button>
            <button onClick={closeChapter} style={{ marginBottom: "10px" }}>
              Close Chapter
            </button>
          </div>
          {lesson.body}
        </div>
      </>
    );
  }

  return selectorNode;
}
