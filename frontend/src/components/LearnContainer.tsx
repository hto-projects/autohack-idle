import { useState, ReactNode } from "react";
import LearnLessonContainer from "./LearnLessonContainer";
import { ILearnModule } from "./learn_lessons/LearnAppDirectory";

interface LearnContainerProps {
  learnObj: ILearnModule;
}

export default function LearnContainer({ learnObj }: LearnContainerProps) {
  const [visibleChapter, setVisibleChapter] = useState(-1);
  let node: ReactNode = undefined;

  if (visibleChapter === -1) {
    const buttons: ReactNode[] = [];
    for (let i = 0; i < learnObj.chapters.length; i++) {
      buttons.push(
        <button onClick={() => setVisibleChapter(i)}>
          Chapter {i + 1}: {learnObj.chapters[i].name}
        </button>
      );
    }
    node = (
      <>
        <div>{learnObj.titleNode}</div>
        {buttons}
      </>
    );
  } else {
    const chapter = learnObj.chapters[visibleChapter];
    node = (
      <>
        <LearnLessonContainer
          titleElements={
            <div>
              <h3>{chapter.name}</h3>
              <p>{chapter.description}</p>
            </div>
          }
          lessons={chapter.lessons}
          closeChapter={() => setVisibleChapter(-1)}
        ></LearnLessonContainer>
        {/* <button onClick={() => } style={{ marginTop: ".5%" }}>
          Close Chapter
        </button> */}
      </>
    );
  }

  return <div className={"learnContainer"}>{node}</div>;
}
