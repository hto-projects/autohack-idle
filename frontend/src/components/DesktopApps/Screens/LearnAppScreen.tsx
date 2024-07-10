import { useDispatch } from "react-redux";
import LearnContainer from "../../LearnContainer";
import { learnObj } from "../../Learn Lessons/learnObj";

export default function LearnAppScreen() {
  const dispatch = useDispatch();

  return <LearnContainer learnObj={learnObj}></LearnContainer>;
}
