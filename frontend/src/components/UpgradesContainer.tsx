import { useDispatch, useSelector } from "react-redux";
import Upgrade from "./Upgrade";
import { IGameData, IUpgrade, UpgradeStatus } from "../../../shared/types";
import { IGameState } from "../store";
import { purchaseUpgrade } from "../slices/gameDataSlice";

export default function UpgradesContainer() {
  const upgradesState = useSelector((state: IGameState) => state.upgrades);
  const upgrades: IUpgrade[] = upgradesState.availableUpgrades;
  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);

  const dispatch = useDispatch();

  const getStatusForUpgrade = (up: IUpgrade): UpgradeStatus => {
    if (gameData.upgrades.includes(up.name)) {
      return UpgradeStatus.Owned;
    }

    for (let x of up.preReqs) {
      if (!gameData.upgrades.includes(x)) {
        return UpgradeStatus.Hidden;
      }
    }

    if (gameData.currencyAmount >= up.cost) {
      return UpgradeStatus.Available;
    }

    return UpgradeStatus.Unavailable;
  };

  const attemptPurchase = (up: IUpgrade) => {
    if (gameData.currencyAmount >= up.cost) {
      dispatch(purchaseUpgrade({ upgradeToPurchase: up }));
    }
  };

  return (
    <div className="upgrades-container" style={{ marginBottom: "20px" }}>
      {upgrades
        .filter((up) => {
          if (getStatusForUpgrade(up) === UpgradeStatus.Hidden) {
            return false;
          }
          return true;
        })
        .map((up) => (
          <Upgrade
            up={up}
            status={getStatusForUpgrade(up)}
            key={up.name}
            onBuy={attemptPurchase}
            currencyAmount={gameData.currencyAmount}
          ></Upgrade>
        ))}
    </div>
  );
}
