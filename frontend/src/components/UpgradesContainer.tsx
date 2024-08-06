import { useDispatch, useSelector } from "react-redux";
import Upgrade from "./Upgrade";
import { IRGBTriple, IUpgrade, UpgradeStatus } from "../../../shared/types";
import { IGameState } from "../store";
import { IGameData, purchaseUpgrade } from "../slices/gameDataSlice";
import { useState } from "react";
import UpgradeModal from "./UpgradeModal";
import { RGBTripleToCSS } from "../../../shared/util";

export const bgUnavailableRGBT: IRGBTriple = { r: 179, g: 176, b: 176 };
export const bgAvailableRGBT: IRGBTriple = { r: 0, g: 255, b: 255 };
export const bgOwnedRGBT: IRGBTriple = { r: 100, g: 255, b: 0 };

export const bgAvailableCSS = RGBTripleToCSS(bgAvailableRGBT);
export const bgOwnedCSS = RGBTripleToCSS(bgOwnedRGBT);

export interface IModal {
  xPos: number;
  yPos: number;
  upgrade: IUpgrade;
  status: UpgradeStatus;
}

export const initialUpgradeForModalState: IModal = {
  xPos: 0,
  yPos: 0,
  upgrade: null,
  status: null
};

export default function UpgradesContainer() {
  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  const [upgradeForModal, setModalUpgrade] = useState<IModal>(initialUpgradeForModalState);
  const dispatch = useDispatch();

  const getStatusForUpgrade = (up: IUpgrade): UpgradeStatus => {
    if (gameData.ups.acquired.includes(up)) {
      return UpgradeStatus.Owned;
    }
    return gameData.currencyAmount >= up.cost ? UpgradeStatus.Available : UpgradeStatus.Unavailable;
  };

  const attemptPurchase = (up: IUpgrade) => {
    if (gameData.currencyAmount >= up.cost) {
      dispatch(purchaseUpgrade(up));
    }
  };

  const upgradeBox = (upgrades: IUpgrade[], name: string) => {
    return (
      <div className="upgrade-box" style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
        {name}
        <div
          style={{
            backgroundColor: "dimgray",
            width: "400px",
            height: "100%",
            gap: "5px", // Having individual rowGap and columnGap is also a possibility
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "normal",
            alignContent: "start",
            alignItems: "start"
          }}
        >
          {upgrades.map((up) => (
            <Upgrade
              key={up.name}
              up={up}
              status={getStatusForUpgrade(up)}
              currencyAmount={gameData.currencyAmount}
              setModal={setModalUpgrade}
            ></Upgrade>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="upgrades-container"
      style={{
        height: "100%",
        paddingTop: "20px",
        paddingBottom: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
      }}
    >
      {upgradeBox(gameData.ups.acquired, "Acquired Upgrades")}
      {upgradeBox(gameData.ups.purchasable, "Purchasable Upgrades")}
      {upgradeForModal.upgrade !== null && (
        <UpgradeModal
          up={upgradeForModal}
          percentage={Math.min(
            Math.trunc(((gameData.currencyAmount + 0.001) / (upgradeForModal.upgrade.cost + 0.001)) * 100),
            100
          )}
          onBuy={attemptPurchase}
          setModalUpgrade={setModalUpgrade}
        ></UpgradeModal>
      )}
    </div>
  );
}
