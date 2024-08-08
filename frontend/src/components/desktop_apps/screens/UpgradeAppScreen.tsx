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

  const trustySelling = () => {
    dispatch(sellData(true));
    playSoundEffect("trustworthy");
  };

  const shadySelling = () => {
    dispatch(sellData(false));
    playSoundEffect("shady");
  };

  return (
    <>
      <div style={{ height: "75%", width: "100%" }}>
        <UpgradesContainer></UpgradesContainer>
      </div>
      <button onClick={() => trustySelling()}>Sell Data to Trustworthy Organazations</button>
      <button onClick={() => shadySelling()}>Sell Data to Shady Organazations</button>
    </>
  );
}
