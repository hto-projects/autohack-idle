import { bgAvailableCSS, IModal, initialUpgradeForModalState } from "./UpgradesContainer";
import { IUpgrade } from "../../../shared/types";
import { ReactNode } from "react";
import Taskbar from "./desktop_apps/Taskbar";

interface IUpgradeModalProps {
  up: IModal;
  percentage: number;
  onBuy: (up: IUpgrade) => void;
  setModalUpgrade: React.Dispatch<React.SetStateAction<IModal>>;
}

const width = 380;
const borderRadius = "16px";

export default function UpgradeModal({ up, percentage, onBuy, setModalUpgrade }: IUpgradeModalProps) {
  let buttonNode: ReactNode = null;
  if (up.status !== "owned") {
    buttonNode = (
      <>
        <button
          style={{ marginBottom: "5px" }}
          onClick={() => {
            onBuy(up.upgrade);
            setModalUpgrade(initialUpgradeForModalState);
          }}
          disabled={percentage < 100}
        >
          Purchase
          <Taskbar></Taskbar>
        </button>
      </>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "orange",
        borderRadius: "6px",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bottom: document.defaultView.innerHeight - up.yPos,
        left: up.xPos,
        width: width,
        textAlign: "center"
      }}
    >
      <div
        style={{
          width: "95%",
          margin: "5px",
          height: "18px",
          borderRadius: borderRadius,
          backgroundColor: "gray",
          fontSize: "12px"
        }}
      >
        <span style={{ position: "absolute", zIndex: "1" }}>{`${percentage}%`}</span>
        <div
          style={{
            position: "relative",
            backgroundColor: bgAvailableCSS,
            borderRadius: borderRadius,
            width: `${percentage}%`,
            height: "100%",
            fontSize: "12px"
          }}
        ></div>
      </div>
      <span>{`${up.upgrade.name}: ${up.upgrade.cost} pixels`}</span>
      <span>{up.upgrade.description}</span>
      {buttonNode}
    </div>
  );
}
