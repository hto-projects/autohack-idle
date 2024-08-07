import UpgradesContainer from "../../UpgradesContainer";
import { useDispatch, useSelector } from "react-redux";
import { categorizeUpgrades, IGameData, sellData } from "../../../slices/gameDataSlice";
import { IGameState } from "../../../store";

export default function UpgradeAppScreen() {
  const dispatch = useDispatch();

  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  if (gameData.ups.uncategorized.length > 0) {
    dispatch(categorizeUpgrades());
  }

  return (
    <>
      <div style={{ height: "75%", width: "100%" }}>
        <UpgradesContainer></UpgradesContainer>
      </div>
      <button onClick={() => dispatch(sellData(true))}>Sell Data to Trustworthy Organazations</button>
      <button onClick={() => dispatch(sellData(false))}>Sell Data to Shady Organazations</button>
    </>
  );
}
