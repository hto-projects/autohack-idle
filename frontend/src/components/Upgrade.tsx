import { IUpgrade, UpgradeStatus } from "../../../shared/types";

interface IUpgradeProps {
  up: IUpgrade;
  status: UpgradeStatus;
  onBuy: (up: IUpgrade) => void;
}

export default function Upgrade({ up, status, onBuy }: IUpgradeProps) {
  return (
    <div
      className={`upgrade status-${status}`}
      onClick={() => {
        confirm("You sure?") && onBuy(up);
      }}
    >
      <span style={{ fontWeight: "bold" }}>{up.name}</span> ({status})
    </div>
  );
}
