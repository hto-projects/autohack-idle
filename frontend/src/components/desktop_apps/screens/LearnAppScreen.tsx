import { learnAppDirectory } from "../../puzzle_learn/learn_lessons/LearnAppDirectory";
import ModuleContainer from "../ModuleContainer";
import { ILesson } from "../../puzzle_learn/learnLessons";

export default function LearnAppScreen() {
  // return <LearnContainer learnObj={learnAppDirectory}></LearnContainer>;
  return <ModuleContainer module={learnAppDirectory}></ModuleContainer>;
}
