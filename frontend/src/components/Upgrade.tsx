import { IUpgrade, UpgradeStatus } from "../../../shared/types";
import { RGBTripleToCSS } from "../../../shared/util";

interface IUpgradeProps {
  up: IUpgrade;
  status: UpgradeStatus;
  onBuy: (up: IUpgrade) => void;
  currencyAmount: number;
}

const bgUnavailableRGBT = { r: 179, g: 176, b: 176 };
const bgAvailableRGBT = { r: 0, g: 255, b: 255 };
const bgOwnedRGBT = { r: 100, g: 255, b: 0 };

const bgAvailableCSS = RGBTripleToCSS(bgAvailableRGBT);
const bgOwnedCSS = RGBTripleToCSS(bgOwnedRGBT);

const Upgrade = ({ up, status, onBuy, currencyAmount }: IUpgradeProps) => {
  let bgColor = undefined;
  switch (status) {
    case "unavailable":
      let percentage = currencyAmount / up.cost;
      const bgNew = {
        r: bgUnavailableRGBT.r - percentage * (bgUnavailableRGBT.r - bgAvailableRGBT.r),
        g: bgUnavailableRGBT.g - percentage * (bgUnavailableRGBT.g - bgAvailableRGBT.g),
        b: bgUnavailableRGBT.b - percentage * (bgUnavailableRGBT.b - bgAvailableRGBT.b)
      };
      bgColor = RGBTripleToCSS(bgNew);
      console.log(bgColor);
      break;
    case "available":
      bgColor = bgAvailableCSS;
      break;
    case "owned":
      bgColor = bgOwnedCSS;
      break;
    default:
      console.log(`Upgrade ${up} has invalid status ${status}`);
      break;
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
