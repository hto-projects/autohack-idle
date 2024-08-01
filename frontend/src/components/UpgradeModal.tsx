import { useSelector } from "react-redux";
import { IGameState } from "../store";
import { IModal } from "./UpgradesContainer";

interface IUpgradeModalProps {
  up: IModal;
}

export default function UpgradeModal({ up }: IUpgradeModalProps) {
  const _ = useSelector((state: IGameState) => state.gameData.numBits);
  const width = 380;
  const height = 100;
  return (
    <div
      style={{
        backgroundColor: "orange",
        position: "fixed",
        top: up.yPos - height,
        left: up.xPos + 6,
        width: width,
        height: height,
        textAlign: "center"
      }}
    >
      <div style={{ margin: "5px", borderRadius: "10px", backgroundColor: "gray" }}>
        <div
          style={{
            backgroundColor: "blue",
            borderRadius: "10px",
            width: `${up.percentage}%`,
            height: "100%",
            fontSize: "12px"
          }}
        >
          {`${up.percentage}%`}
        </div>
      </div>
      {up.upgrade.name}
    </div>
  );
}
