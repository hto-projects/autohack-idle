import { useEffect, useRef } from "react";
import { IUpgrade, UpgradeStatus, IRGBTriple } from "../../../shared/types";
import { RGBTripleToCSS } from "../../../shared/util";
import { UpgradeImage } from "./Image";
import { IModal } from "./UpgradesContainer";

interface IUpgradeProps {
  up: IUpgrade;
  status: UpgradeStatus;
  currencyAmount: number;
  onBuy: (up: IUpgrade) => void;
  setModal: (up: IModal) => void;
}

const bgUnavailableRGBT: IRGBTriple = { r: 179, g: 176, b: 176 };
const bgAvailableRGBT: IRGBTriple = { r: 0, g: 255, b: 255 };
const bgOwnedRGBT: IRGBTriple = { r: 100, g: 255, b: 0 };

const bgAvailableCSS = RGBTripleToCSS(bgAvailableRGBT);
const bgOwnedCSS = RGBTripleToCSS(bgOwnedRGBT);

export default function Upgrade({ up, status, currencyAmount, onBuy, setModal }: IUpgradeProps) {
  let bgColor: string = null;
  let percentageText: string = null;
  let onClickEvent: () => void = null;
  const ref = useRef(null);
  // useEffect(() => {
  //   if (ref.current) {
  //     console.log(ref.current.getBoundingClientRect());
  //     clientRect = ref.current.getBoundingClientRect();
  //   }
  // }, []);

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
      // onClickEvent = () => {
      //   confirm("You sure?") && onBuy(up);
      // };
      break;
    case "owned":
      bgColor = bgOwnedCSS;
      break;
    default:
      console.log(`Upgrade ${up} has invalid status ${status}`);
      break;
  }

  onClickEvent = () => {
    const clientRect = ref.current.getBoundingClientRect();
    setModal({ xPos: clientRect.left, yPos: clientRect.top, upgrade: up, status: status });
  };
  return (
    <div ref={ref} className={`upgrade status-${status}`} onClick={onClickEvent} style={{ background: bgColor }}>
      <UpgradeImage picture={up.picture}></UpgradeImage>
    </div>
  );
}
