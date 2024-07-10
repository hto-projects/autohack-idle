import { useState, ReactNode } from "react";
import LearnButtonSelector from "./LearnButtonSelector";
import { ILearnModule, learnObj } from "./Learn Lessons/learnObj";

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
        <LearnButtonSelector
          titleElements={
            <div>
              {chapter.name}
              <p>{chapter.description}</p>
            </div>
          }
          lessons={chapter.lessons}
        ></LearnButtonSelector>
        <button onClick={() => setVisibleChapter(-1)} style={{ marginTop: ".5%" }}>
          Close Chapter
        </button>
      </>
    );
  }

  return <div className={"learnContainer"}>{node}</div>;
}

// switch (visibleChapter) {
//   case "chapterSelect":
//     learnNode = (
//       <>
//         <button onClick={() => setVisibleChapter("chapterOne")}> Chapter 1: Collect All Upgrade</button>
//         <button onClick={() => setVisibleChapter("chapterOne")}> Chapter 2 </button>
//       </>
//     );
//     break;
//   case "chapterOne":
//     learnNode = (
//       <LearnButtonSelector
//         titleElements={
//           <div className={"chapterText"}>
//             <h2> Chapter 1: Adding A Collect All Upgrade </h2>
//             <p>
//               Complete this chapter to learn how to code an upgrade that allows you to collect all bits available.
//             </p>
//           </div>
//         }
//         lessons={[
//           {
//             name: "Buttons in HTML",
//             body: <C1L1></C1L1>
//           },
//           {
//             name: "Functions in Javascript",
//             body: <C1L2></C1L2>
//           }
//         ]}
//       ></LearnButtonSelector>
//     );
//     break;
//   case "chapterTwo":
//     // learnNode = <ChapterTwo></ChapterTwo>;
//     break;
// }
