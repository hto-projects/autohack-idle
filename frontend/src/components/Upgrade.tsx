import { useRef } from "react";
import { IUpgrade, UpgradeStatus } from "../../../shared/types";
import { RGBTripleToCSS } from "../../../shared/util";
import { UpgradeImage } from "./Image";
import { bgAvailableCSS, bgAvailableRGBT, bgOwnedCSS, bgUnavailableRGBT, IModal } from "./UpgradesContainer";

interface IUpgradeProps {
  up: IUpgrade;
  status: UpgradeStatus;
  currencyAmount: number;
  setModal: (up: IModal) => void;
}

export default function Upgrade({ up, status, currencyAmount, setModal }: IUpgradeProps) {
  let bgColor: string = null;
  let onClickEvent: () => void = null;
  const ref = useRef<HTMLDivElement>(null);

  switch (status) {
    case "unavailable":
      const percentage = currencyAmount / up.cost;
      const bgNew = {
        r: bgUnavailableRGBT.r - percentage * (bgUnavailableRGBT.r - bgAvailableRGBT.r),
        g: bgUnavailableRGBT.g - percentage * (bgUnavailableRGBT.g - bgAvailableRGBT.g),
        b: bgUnavailableRGBT.b - percentage * (bgUnavailableRGBT.b - bgAvailableRGBT.b)
      };
      bgColor = RGBTripleToCSS(bgNew);
      break;
    case "available":
      bgColor = bgAvailableCSS;
      break;
    case "owned":
      bgColor = bgOwnedCSS;
      break;
  }

  onClickEvent = () => {
    const clientRect: DOMRect = ref.current.getBoundingClientRect();
    setModal({
      xPos: clientRect.left + clientRect.width / 2,
      yPos: clientRect.top,
      upgrade: up,
      status: status
    });
  };

  return (
    <div ref={ref} className={`upgrade status-${status}`} onClick={onClickEvent} style={{ background: bgColor }}>
      <UpgradeImage picture={up.picture}></UpgradeImage>
    </div>
  );
}
