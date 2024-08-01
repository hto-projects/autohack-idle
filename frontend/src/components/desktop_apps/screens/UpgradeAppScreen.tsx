import UpgradesContainer from "../../UpgradesContainer";
import { useDispatch, useSelector } from "react-redux";
import { sellData } from "../../../slices/gameDataSlice";
import { IGameData } from "../../../../../shared/types";
import { IGameState } from "../../../store";

export default function UpgradeAppScreen() {
  const dispatch = useDispatch();

  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);

  return (
    <>
      <UpgradesContainer></UpgradesContainer>
      <button onClick={() => dispatch(sellData({ soldToTrusty: true }))}>Sell Data to Trustworthy Organazations</button>
      <button onClick={() => dispatch(sellData({ soldToTrusty: false }))}>Sell Data to Shady Organazations</button>
    </>
  );
}
