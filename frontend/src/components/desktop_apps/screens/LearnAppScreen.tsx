import { useDispatch } from "react-redux";
import LearnContainer from "../../LearnContainer";
import { learnAppDirectory } from "../../learn_lessons/LearnAppDirectory";

export default function LearnAppScreen() {
  return <LearnContainer learnObj={learnAppDirectory}></LearnContainer>;
}
