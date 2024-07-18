import { addBits, resetGameData } from "../../../slices/gameDataSlice";
import { useDispatch } from "react-redux";
import { resetUpgrades } from "../../../slices/upgradesSlice";
import { IGameData } from "../../../../../shared/types";
import { useSelector } from "react-redux";

export default function SettingsAppScreen() {
  const dispatch = useDispatch();
  const additionalBitsAmount = 1000;
  const gameData: IGameData = useSelector((state: any) => state.gameData);

  return (
    <>
      <button
        onClick={() => confirm("This will reset all data ") && dispatch(resetGameData()) && dispatch(resetUpgrades())}
      >
        Reset
      </button>
      <button onClick={() => dispatch(addBits({ additionalBits: additionalBitsAmount }))}>
        Add {additionalBitsAmount} Bits
      </button>
      <p>Lifetime Bits: {gameData.totalNumBits}</p>
    </>
  );
}
