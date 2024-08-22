import ModuleContainer from "../ModuleContainer";
import { learnAppDirectory } from "../../puzzle_learn/learn_lessons/LearnAppDirectory";
import { IPuzzle } from "../../puzzle_learn/learnLessons";
import { PuzzleAppDirectory } from "../../puzzle_learn/puzzles/PuzzleAppDirectory";

export default function PuzzleAppScreen() {
  // return <PuzzleContainer puzzleObj={PuzzleAppDirectory}></PuzzleContainer>;
  return <ModuleContainer module={PuzzleAppDirectory}></ModuleContainer>;
}
