import { IPuzzleModule } from "./puzzles/PuzzleAppDirectory";
import PuzzleContainer from "./puzzles/PuzzleContainer";
import { useState, ReactNode } from "react";
import { IGameState } from "../store";
import { useSelector } from "react-redux";
import { flatObjByProp } from "../../../shared/util";
import { ImageType } from "../../../shared/types";
import { HelpAppImage } from "./Image";

interface PuzzleAppContainerProps {
  puzzleObj: IPuzzleModule;
}

export default function PuzzleAppContainer({ puzzleObj }: PuzzleAppContainerProps) {
  const [visiblePuzzleSets, setVisiblePuzzleSet] = useState(-1);
  const solvedPuzzles: string[] = useSelector((state: IGameState) => state.gameData.solvedPuzzles);

  const getSetState = (checkedSet: number): string => {
    const puzzleNames = flatObjByProp(puzzleObj.puzzleSets[checkedSet].puzzles, "name");
    for (const puzzle of puzzleNames) {
      if (!solvedPuzzles.includes(puzzle)) {
        return "incomplete";
      }
    }
    return "complete";
  };

  let node: ReactNode = undefined;
  if (visiblePuzzleSets === -1) {
    const buttons: ReactNode[] = [];
    for (let i = 0; i < puzzleObj.puzzleSets.length; i++) {
      const currPuzSetName = puzzleObj.puzzleSets[i].name;
      buttons.push(
        <button
          key={currPuzSetName}
          onClick={() => setVisiblePuzzleSet(i)}
          style={{ fontSize: "22px", width: "50%", borderWidth: "3px", marginBottom: "1%" }}
        >
          {`Set ${i + 1}: ${currPuzSetName} (${getSetState(i)})`}
        </button>
      );
    }
    node = (
      <>
        <div>{puzzleObj.titleNode}</div>
        {buttons}
        <div style={{ height: "50%" }}>
          <HelpAppImage picture={{ image: "puzzle", type: ImageType.Png }}></HelpAppImage>{" "}
        </div>
      </>
    );
  } else {
    const puzzleSet = puzzleObj.puzzleSets[visiblePuzzleSets];
    node = (
      <>
        <PuzzleContainer
          titleElements={
            <div>
              <h3>{puzzleSet.name}</h3>
              <p>{puzzleSet.description}</p>
            </div>
          }
          puzzles={puzzleSet.puzzles}
        ></PuzzleContainer>
        <button onClick={() => setVisiblePuzzleSet(-1)} style={{ marginTop: ".5%" }}>
          Close Set
        </button>
      </>
    );
  }

  return <div className={"learnContainer"}>{node}</div>;
}
