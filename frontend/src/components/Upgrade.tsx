import { IUpgrade, UpgradeStatus } from "../../../shared/types";

interface IUpgradeProps {
  up: IUpgrade;
  status: UpgradeStatus;
  onBuy: (up: IUpgrade) => void;
  currencyAmount: number;
}

interface RGBTriple {
  r: number;
  g: number;
  b: number;
}
const defUn = { r: 179, g: 176, b: 176 };
const defAv = { r: 25, g: 224, b: 224 };

const Upgrade = ({ up, status, onBuy, currencyAmount }: IUpgradeProps) => {
  let bgColor = undefined;
  if (status === "unavailable") {
    const difference = { r: defUn.r - defAv.r, g: defUn.g - defAv.g, b: defUn.b - defAv.b };
    let percentage = currencyAmount / up.cost;
    bgColor = `rgb(${defUn.r - percentage * difference.r} ${defUn.g - percentage * difference.g} ${
      defUn.b - percentage * difference.b
    })`;
  }

  return (
    <div
      className={`upgrade status-${status}`}
      onClick={() => {
        confirm("You sure?") && onBuy(up);
      }}
      style={{ background: bgColor }}
    >
      <span style={{ fontWeight: "bold" }}>{up.name}</span> ({status})
    </div>
  );
};

export default Upgrade;
