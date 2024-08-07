import UpgradesContainer from "../../UpgradesContainer";
import { useDispatch, useSelector } from "react-redux";
import { categorizeUpgrades, IGameData, sellData } from "../../../slices/gameDataSlice";
import { IGameState } from "../../../store";
import { playSoundEffect } from "../../../soundEffect";

export default function UpgradeAppScreen() {
  const dispatch = useDispatch();

  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  if (gameData.ups.uncategorized.length > 0) {
    dispatch(categorizeUpgrades());
  }

  function trustySelling() {
    dispatch(sellData(true));
    playSoundEffect("trustworthy");
  }

  function shadySelling() {
    dispatch(sellData(false));
    playSoundEffect("shady");
  }

  return (
    <>
      <UpgradesContainer></UpgradesContainer>
      <button onClick={() => trustySelling()}>Sell Data to Trustworthy Organazations</button>
      <button onClick={() => shadySelling()}>Sell Data to Shady Organazations</button>
    </>
  );
}
