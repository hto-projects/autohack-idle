import { AppType } from "../../../../../shared/types";
import { useKeyDown } from "../../../../frontend-util";

interface TitleBarProps {
  open: AppType;
  setOpen: () => void;
}

export default function TitleBar({ open, setOpen }: TitleBarProps) {
  useKeyDown(setOpen, ["Escape"]);
  let taskbarColor = "#9caf88";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: taskbarColor,
        width: "100%",
        textAlign: "right",
        marginBottom: "10px"
      }}
    >
      <div style={{ marginLeft: "1%", textAlign: "center", verticalAlign: "middle", fontSize: "18px" }}>{open}</div>
      <div style={{ width: "100%" }}>
        <button style={{ textAlign: "center", backgroundColor: "red", color: "white" }} onClick={setOpen}>
          X
        </button>
      </div>
    </div>
  );
}
