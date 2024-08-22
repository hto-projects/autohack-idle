import { useState, ReactNode } from "react";
import { IGameData } from "../../slices/gameDataSlice";
import { useSelector } from "react-redux";
import { IGameState } from "../../store";
import { GenButtonText, IModuleNames, ISection } from "../app_directories/directoryTypes";
import Puzzle from "../app_directories/puzzles/Puzzle";

interface IModuleSectionContainer {
  section: ISection;
  names: IModuleNames;
  genSectionText: GenButtonText;
  closeSection: () => void;
}

export default function ModuleSectionContainer({
  section,
  names,
  genSectionText,
  closeSection
}: IModuleSectionContainer) {
  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  const [visibleSegmentI, setVisibleSegmentI] = useState(-1);

  if (visibleSegmentI === -1) {
    const buttons: ReactNode[] = [];
    for (let i = 0; i < section.segments.length; i++) {
      const currLessonName = section.segments[i].name;
      buttons.push(
        <button
          key={currLessonName}
          onClick={() => setVisibleSegmentI(i)}
          style={{ fontSize: "18px", width: "40%", height: "8%", borderWidth: "3px", marginBottom: "1%" }}
        >
          {genSectionText(i, currLessonName, gameData)}
        </button>
      );
    }
    return (
      <>
        <div>
          <h3>{section.name}</h3>
          <p>{section.description}</p>
        </div>
        {buttons}
        <button onClick={closeSection} style={{ marginTop: "10px" }}>
          {`Close ${names.module}`}
        </button>
      </>
    );
  }

  const currSegment = section.segments[visibleSegmentI];
  let bodyNode: ReactNode = undefined;

  switch (currSegment.kind) {
    case "lesson":
      bodyNode = currSegment.body;
      break;
    case "puzzle":
      bodyNode = <Puzzle puzzle={currSegment}></Puzzle>;
      break;
  }
  console.log(bodyNode);

  return (
    <>
      <div className={`normalLesson ${open && "showing"}`} style={{ color: "grey", width: "90%", height: "95%" }}>
        <div style={{ display: "flex" }}>
          <h3 style={{ color: "black", textAlign: "left" }}>
            {`${names.segment} ${visibleSegmentI + 1}: ${currSegment.name}`}
          </h3>
          <button
            onClick={() => setVisibleSegmentI(-1)}
            style={{ marginBottom: "10px", marginRight: "3px", marginLeft: "3px" }}
          >
            {`Close ${names.segment}`}
          </button>
          <button onClick={closeSection} style={{ marginBottom: "10px" }}>
            {`Close ${names.section}`}
          </button>
        </div>
        {bodyNode}
      </div>
    </>
  );
}
