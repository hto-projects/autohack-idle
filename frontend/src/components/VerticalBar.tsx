import { useSelector } from "react-redux";
import { IGameState } from "../../../store";

export default function VerticalBar() {
  const verticalBarColor: string = useSelector((state: IGameState) => state.styleData.backgroundColor.verticalbar);
  return <div style={{ height: "100%", flex: "2%", backgroundColor: verticalBarColor }}></div>;
}
