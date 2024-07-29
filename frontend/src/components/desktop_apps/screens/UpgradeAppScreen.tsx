import UpgradesContainer from "../../UpgradesContainer";
import { useDispatch, useSelector } from "react-redux";
import { categorizeUpgrades, sellData } from "../../../slices/gameDataSlice";
import { IGameData } from "../../../../../shared/types";
import { IGameState } from "../../../store";

export default function UpgradeAppScreen() {
  const dispatch = useDispatch();

  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  if (gameData.ups.uncategorized.length > 0) {
    dispatch(categorizeUpgrades());
  }

  return (
    <>
      <UpgradesContainer></UpgradesContainer>
      <button onClick={() => dispatch(sellData())}>Sell Data</button>
    </>
  );
}
