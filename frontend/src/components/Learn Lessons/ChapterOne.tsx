import React from "react";
import C1L1 from "./C1L1";
import C1L2 from "./C1L2";

export default function ChapterOne() {
  const [less1Vis, setLess1Vis] = React.useState(false);
  const [less2Vis, setLess2Vis] = React.useState(false);

  function openLessonOne() {
    setLess1Vis(true);
    setLess2Vis(false);
  }

  function openLessonTwo() {
    setLess2Vis(true);
    setLess1Vis(false);
  }

  function closeLesson() {
    setLess1Vis(false);
    setLess2Vis(false);
  }

  return (
    <>
      <div className={"chapterText"}>
        <h2> Chapter 1: Adding A Collect All Upgrade </h2>
        <p> Complete this chapter to learn how to code an upgrade that allows you to collect all bits available. </p>
      </div>

      <div>
        <button onClick={openLessonOne}> Lesson 1: Buttons in HTML </button>
        <button onClick={openLessonTwo}> Lesson 2: Functions in JavaScript </button>
      </div>

      {less1Vis && (
        <div>
          <button onClick={closeLesson} style={{ marginTop: ".5%" }}>
            Close Lesson
          </button>
          <C1L1></C1L1>
        </div>
      )}

      {less2Vis && (
        <div>
          <button onClick={closeLesson} style={{ marginTop: ".5%" }}>
            Close Lesson
          </button>
          <C1L2></C1L2>
        </div>
      )}
    </>
  );
}
