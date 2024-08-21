import { useState, ReactNode } from "react";
import LearnLessonContainer from "./LearnLessonContainer";
import { ILearnModule } from "./learn_lessons/LearnAppDirectory";
import { HelpAppImage } from "./Image";
import { ImageType } from "../../../shared/types";

interface LearnContainerProps {
  learnObj: ILearnModule;
}

export default function LearnContainer({ learnObj }: LearnContainerProps) {
  const [visibleChapter, setVisibleChapter] = useState(-1);
  let node: ReactNode = undefined;

  if (visibleChapter === -1) {
    const buttons: ReactNode[] = [];
    for (let i = 0; i < learnObj.chapters.length; i++) {
      const currChapter = learnObj.chapters[i].name;
      buttons.push(
        <button
          key={currChapter}
          onClick={() => setVisibleChapter(i)}
          style={{ fontSize: "22px", width: "45%", height: "8%", borderWidth: "3px", marginBottom: "1%" }}
        >
          Chapter {i + 1}: {currChapter}
        </button>
      );
    }
    node = (
      <>
        <div>{learnObj.titleNode}</div>
        {buttons}
        <div style={{ marginRight: "3%", marginTop: "-2%", marginBottom: "-1%" }}>
          <HelpAppImage picture={{ image: "learn", type: ImageType.Png }}></HelpAppImage>{" "}
        </div>
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
              <p style={{ marginRight: "5%", marginLeft: "5%" }}>{chapter.description}</p>
            </div>
          }
          lessons={chapter.lessons}
          closeChapter={() => setVisibleChapter(-1)}
        ></LearnLessonContainer>
      </>
    );
  }

  return (
    <div id="learnContainer" style={{ height: "99%" }}>
      {node}
    </div>
  );
}
