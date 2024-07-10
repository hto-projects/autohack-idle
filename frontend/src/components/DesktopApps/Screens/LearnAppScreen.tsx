import { useDispatch } from "react-redux";
import LearnContainer from "../../LearnContainer";
import { learnAppDirectory } from "../../Learn Lessons/LearnAppDirectory";

export default function LearnAppScreen() {
  const dispatch = useDispatch();

  return <LearnContainer learnObj={learnAppDirectory}></LearnContainer>;
}
