import { PuzzleAppDirectory } from "../../puzzle_sets/PuzzleAppDirectory";
import PuzzleContainer from "../../PuzzleAppContainer";

export default function PuzzleAppScreen() {
  return <PuzzleContainer puzzleObj={PuzzleAppDirectory}></PuzzleContainer>;
}
