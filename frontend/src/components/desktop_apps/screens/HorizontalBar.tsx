import { useSelector } from "react-redux";
import { IGameState } from "../../../store";

export default function HorizontalBar() {
  const horizontalBarColor: string = useSelector((state: IGameState) => state.styleData.backgroundColor.horizontalbar);
  return <div style={{ width: "100%", flex: "3%", backgroundColor: horizontalBarColor }}></div>;
}
