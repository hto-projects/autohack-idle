import { useDispatch, useSelector } from "react-redux";
import Upgrade from "./Upgrade";
import { IGameData, IUpgrade, UpgradeStatus } from "../../../shared/types";
import { IGameState } from "../store";
import { purchaseUpgrade } from "../slices/gameDataSlice";

export default function UpgradesContainer() {
  // const upgradesState = useSelector((state: IGameState) => state.upgrades);
  // const upgrades: IUpgrade[] = upgradesState.availableUpgrades;
  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  const upgradesState = gameData.ups;
  console.log(gameData);
  console.log(upgradesState);
  // console.log(upgrades);
  // const acquiredUpgrades = upgradesState.acquired;
  // const purchasableUpgrades = upgradesState.purchasable;

  const dispatch = useDispatch();

  const getStatusForUpgrade = (up: IUpgrade): UpgradeStatus => {
    return gameData.currencyAmount >= up.cost ? UpgradeStatus.Available : UpgradeStatus.Unavailable;
  };

  const attemptPurchase = (up: IUpgrade) => {
    if (gameData.currencyAmount >= up.cost) {
      dispatch(purchaseUpgrade({ upgradeToPurchase: up }));
    }
  };

  // const ownedUpgrades: IUpgrade[];
  // const visibleUpgrades: IUpgrade[];

  return (
    <div className="upgrades-container" style={{ marginBottom: "20px" }}>
      {/* {upgrades
        .filter((up) => getStatusForUpgrade(up) !== UpgradeStatus.Hidden)
        .map((up) => (
          <Upgrade
            up={up}
            status={getStatusForUpgrade(up)}
            key={up.name}
            onBuy={attemptPurchase}
            currencyAmount={gameData.currencyAmount}
          ></Upgrade>
        ))} */}
    </div>
  );
}
