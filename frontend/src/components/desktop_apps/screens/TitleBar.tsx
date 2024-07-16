import { RIGHT } from "phaser";
import { AppType } from "../../../../../shared/types";

interface TitleBarProps {
  open: AppType;
  setOpen: () => void;
}

export default function TitleBar({ open, setOpen }: TitleBarProps) {
  const name = open;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "right",
        backgroundColor: "#9caf88",
        width: "100%",
        height: "8%",
        justifyContent: "center",
        textAlign: "right",
        marginBottom: "20px"
      }}
    >
      <h1 style={{ alignSelf: "center" }}>{name}</h1>

      <div
        style={{
          justifyContent: "right",
          width: "85%"
        }}
      >
        <button style={{ textAlign: "center", backgroundColor: "red", color: "white" }} onClick={() => setOpen()}>
          X
        </button>
      </div>
    </div>
  );
}
