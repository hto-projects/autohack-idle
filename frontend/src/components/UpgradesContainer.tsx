import { useDispatch, useSelector } from "react-redux";
import Upgrade from "./Upgrade";
import { IGameData, IUpgrade, UpgradeStatus } from "../../../shared/types";
import { IGameState } from "../store";
import { purchaseUpgrade } from "../slices/gameDataSlice";
import { useState } from "react";
import UpgradeModal from "./UpgradeModal";

export interface IModal {
  xPos: number;
  yPos: number;
  upgrade: IUpgrade;
  status: UpgradeStatus;
  percentage: number;
}

export default function UpgradesContainer() {
  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  const [upgradeForModal, setModalUpgrade] = useState<IModal>({
    xPos: 0,
    yPos: 0,
    upgrade: null,
    status: null,
    percentage: 0
  });
  const dispatch = useDispatch();

  const getStatusForUpgrade = (up: IUpgrade): UpgradeStatus => {
    if (gameData.ups.acquired.includes(up)) {
      return UpgradeStatus.Owned;
    }
    return gameData.currencyAmount >= up.cost ? UpgradeStatus.Available : UpgradeStatus.Unavailable;
  };

  const attemptPurchase = (up: IUpgrade) => {
    if (gameData.currencyAmount >= up.cost) {
      dispatch(purchaseUpgrade({ upgradeToPurchase: up }));
    }
  };

  const upgradeBox = (upgrades: IUpgrade[], bgColor: string) => {
    return (
      <div
        style={{
          backgroundColor: bgColor,
          width: "400px",
          height: "600px",
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
            onBuy={attemptPurchase}
            upgradeForModal={upgradeForModal}
            setModal={setModalUpgrade}
          ></Upgrade>
        ))}
      </div>
    );
  };

  return (
    <div
      className="upgrades-container"
      style={{
        marginTop: "20px",
        marginBottom: "20px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
      }}
    >
      {upgradeBox(gameData.ups.acquired, "red")}
      {upgradeBox(gameData.ups.purchasable, "blue")}
      {upgradeForModal.upgrade !== null && <UpgradeModal up={upgradeForModal}></UpgradeModal>}
    </div>
  );
}
