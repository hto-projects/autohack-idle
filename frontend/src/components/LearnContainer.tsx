import React from "react";
import ChapterOne from "./Learn Lessons/ChapterOne";
import ChapterTwo from "./Learn Lessons/ChapterTwo";

export default function LearnContainer({ children }) {
  const [chap1Vis, setChap1Vis] = React.useState(false);
  const [chap2Vis, setChap2Vis] = React.useState(false);

  function openChapterOne() {
    setChap1Vis(true);
    setChap2Vis(false);
  }

  function openChapterTwo() {
    setChap2Vis(true);
    setChap1Vis(false);
  }

  function closeChapter() {
    setChap1Vis(false);
    setChap2Vis(false);
  }

  return (
    <div className={`learnContainer ${open && "showing"}`}>
      <div>
        <button onClick={openChapterOne}> Chapter 1: Collect All Upgrade</button>
        <button onClick={openChapterTwo}> Chapter 2 </button>
      </div>
      {chap1Vis && (
        <div>
          <button onClick={closeChapter} style={{ marginTop: ".5%" }}>
            Close Chapter
          </button>
          <ChapterOne></ChapterOne>
        </div>
      )}
      {chap2Vis && (
        <div>
          <button onClick={closeChapter} style={{ marginTop: ".5%" }}>
            Close Chapter
          </button>
          <ChapterTwo></ChapterTwo>
        </div>
      )}
    </div>
  );
}
