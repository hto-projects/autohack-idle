import { useSelector } from "react-redux";
import { AppType } from "../../../../../shared/types";
import { useKeyDown } from "../../../../frontend-util";
import { IGameState } from "../../../store";

interface TitleBarProps {
  open: AppType;
  setOpen: () => void;
}

export default function TitleBar({ open, setOpen }: TitleBarProps) {
  useKeyDown(setOpen, ["Escape"]);
  const titleBarColor: string = useSelector((state: IGameState) => state.styleData.backgroundColor.titlebar);
  const titleBarTextColor: string = useSelector((state: IGameState) => state.styleData.textColor.titlebar);
  const titleBarTextFont: string = useSelector((state: IGameState) => state.styleData.textFont.titlebar);
  const titleBarTextSize: string = useSelector((state: IGameState) => state.styleData.textSize.titlebar);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: titleBarColor,
        width: "100%",
        textAlign: "right",
        marginBottom: "10px",
        color: titleBarTextColor,
        fontFamily: titleBarTextFont
      }}
    >
      <div
        style={{
          marginLeft: "1%",
          textAlign: "center",
          verticalAlign: "middle",
          fontSize: titleBarTextSize,
          fontFamily: titleBarTextFont
        }}
      >
        {open}
      </div>
      <div style={{ width: "100%" }}>
        <button style={{ textAlign: "center", backgroundColor: "red", color: "white" }} onClick={setOpen}>
          X
        </button>
      </div>
    </div>
  );
}
