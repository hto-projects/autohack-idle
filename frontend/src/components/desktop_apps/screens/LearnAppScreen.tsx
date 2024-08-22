import { learnAppDirectory } from "../../app_directories/learn_lessons/LearnAppDirectory";
import ModuleContainer from "../ModuleContainer";

export default function LearnAppScreen() {
  return <ModuleContainer module={learnAppDirectory}></ModuleContainer>;
}
