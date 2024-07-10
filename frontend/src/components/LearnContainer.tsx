import { useState, ReactNode } from "react";
import ChapterTwo from "./Learn Lessons/ChapterTwo";
import LearnButtonSelector from "./LearnButtonSelector";
import C1L1 from "./Learn Lessons/C1L1";
import C1L2 from "./Learn Lessons/C1L2";

export default function LearnContainer({ children }) {
  const [visibleChapter, setVisibleChapter] = useState("chapterSelect");
  let learnNode: ReactNode = undefined;

  switch (visibleChapter) {
    case "chapterSelect":
      learnNode = (
        <>
          <button onClick={() => setVisibleChapter("chapterOne")}> Chapter 1: Collect All Upgrade</button>
          <button onClick={() => setVisibleChapter("chapterOne")}> Chapter 2 </button>
        </>
      );
      break;
    case "chapterOne":
      learnNode = (
        <LearnButtonSelector
          titleElements={
            <div className={"chapterText"}>
              <h2> Chapter 1: Adding A Collect All Upgrade </h2>
              <p>
                Complete this chapter to learn how to code an upgrade that allows you to collect all bits available.
              </p>
            </div>
          }
          lessons={[
            {
              name: "Buttons in HTML",
              element: <C1L1></C1L1>
            },
            {
              name: "Functions in Javascript",
              element: <C1L2></C1L2>
            }
          ]}
        ></LearnButtonSelector>
      );
      break;
    case "chapterTwo":
      learnNode = <ChapterTwo></ChapterTwo>;
      break;
  }

  return (
    <div className={"learnContainer"}>
      {learnNode}
      {visibleChapter !== "chapterSelect" && (
        <button onClick={() => setVisibleChapter("chapterSelect")} style={{ marginTop: ".5%" }}>
          Close Chapter
        </button>
      )}
    </div>
  );
}
