import { IUpgrade, UpgradeStatus } from "../../../shared/types";
import { RGBTripleToCSS } from "../../../shared/util";
import UpgradeImage from "./UpgradeImage";

interface IUpgradeProps {
  up: IUpgrade;
  status: UpgradeStatus;
  onBuy: (up: IUpgrade) => void;
  currencyAmount: number;
}

export default function bgUnavailableRGBT = { r: 179, g: 176, b: 176 };
const bgAvailableRGBT = { r: 0, g: 255, b: 255 };
const bgOwnedRGBT = { r: 100, g: 255, b: 0 };

const bgAvailableCSS = RGBTripleToCSS(bgAvailableRGBT);
const bgOwnedCSS = RGBTripleToCSS(bgOwnedRGBT);

const Upgrade({ up, status, onBuy, currencyAmount }: IUpgradeProps) {
  let bgColor: string = null;
  let percentageText: string = null;
  let onClickEvent: () => void = null;
  let nameText: string = up.name;

  switch (status) {
    case "unavailable":
      let percentage = currencyAmount / up.cost;
      const bgNew = {
        r: bgUnavailableRGBT.r - percentage * (bgUnavailableRGBT.r - bgAvailableRGBT.r),
        g: bgUnavailableRGBT.g - percentage * (bgUnavailableRGBT.g - bgAvailableRGBT.g),
        b: bgUnavailableRGBT.b - percentage * (bgUnavailableRGBT.b - bgAvailableRGBT.b)
      };
      bgColor = RGBTripleToCSS(bgNew);
      percentageText = `${Math.trunc(percentage * 100)}%`;
      break;
    case "available":
      bgColor = bgAvailableCSS;
      percentageText = "100%";
      onClickEvent = () => {
        confirm("You sure?") && onBuy(up);
      };
      break;
    case "owned":
      bgColor = bgOwnedCSS;
      nameText = null;
      break;
    default:
      console.log(`Upgrade ${up} has invalid status ${status}`);
      break;
  }

  return (
    <div className={`upgrade status-${status}`} onClick={onClickEvent} style={{ background: bgColor }}>
      <span className="upgrade-image">
        <UpgradeImage picture={up.picture}></UpgradeImage>
      </span>{" "}
      {nameText} {percentageText}
    </div>
  );
}
