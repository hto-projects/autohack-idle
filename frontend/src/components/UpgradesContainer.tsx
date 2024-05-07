import { useSelector } from "react-redux";
import Upgrade from "./Upgrade";
import { IGameData, IUpgrade, UpgradeStatus } from "../../../shared/types";
import { IGameState } from "../store";

const UpgradesContainer = () => {
  const upgradesState = useSelector((state: IGameState) => state.upgrades);
  const upgrades: IUpgrade[] = upgradesState.availableUpgrades;
  const gameData: IGameData = useSelector(
    (state: IGameState) => state.gameData
  );

  const getStatusForUpgrade = (up: IUpgrade): UpgradeStatus => {
    if (gameData.upgrades.includes(up.name)) {
      return UpgradeStatus.Owned;
    }

    if (gameData.currencyAmount >= up.cost) {
      return UpgradeStatus.Available;
    }

    return UpgradeStatus.Unavailable;
  };

  return (
    <div className="upgrades-container">
      {upgrades.map((up) => (
        <Upgrade
          up={up}
          status={getStatusForUpgrade(up)}
          key={up.name}
        ></Upgrade>
      ))}
    </div>
  );
};

export default UpgradesContainer;
