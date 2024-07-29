import { useDispatch, useSelector } from "react-redux";
import Upgrade from "./Upgrade";
import { IGameData, IUpgrade, UpgradeStatus } from "../../../shared/types";
import { IGameState } from "../store";
import { categorizeUpgrades } from "../slices/gameDataSlice";
import { purchaseUpgrade } from "../slices/gameDataSlice";

export default function UpgradesContainer() {
  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  const upgradesState = gameData.ups;
  console.log(gameData);
  console.log(upgradesState);
  // const acquiredUpgrades = upgradesState.acquired;
  // const purchasableUpgrades = upgradesState.purchasable;

  const dispatch = useDispatch();

  const getStatusForUpgrade = (up: IUpgrade): UpgradeStatus => {
    if (upgradesState.acquired.includes(up)) {
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
            up={up}
            status={getStatusForUpgrade(up)}
            key={up.name}
            onBuy={attemptPurchase}
            currencyAmount={gameData.currencyAmount}
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
      {upgradeBox(upgradesState.acquired, "red")}
      {upgradeBox(upgradesState.purchasable, "blue")}
    </div>
  );
}
