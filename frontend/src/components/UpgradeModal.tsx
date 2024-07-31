import { IUpgrade, UpgradeStatus } from "../../../shared/types";
import { IModal } from "./UpgradesContainer";

interface IUpgradeModalProps {
  up: IModal;
}

export default function UpgradeModal({ up }: IUpgradeModalProps) {
  const width = 180;
  const height = 50;
  return (
    <div
      style={{
        backgroundColor: "orange",
        position: "fixed",
        top: up.yPos - height,
        left: up.xPos + 15,
        width: width,
        height: height
      }}
    >
      {up.upgrade.name}
    </div>
  );
}
