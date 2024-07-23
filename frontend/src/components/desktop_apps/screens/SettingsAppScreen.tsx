import { addBits, resetGameData } from "../../../slices/gameDataSlice";
import { useDispatch } from "react-redux";
import { resetUpgrades } from "../../../slices/upgradesSlice";

export default function SettingsAppScreen() {
  const dispatch = useDispatch();

  function addBitsButton() {
    let additionalBitsAmount = prompt("Enter the amount of Bits you want");
    dispatch(addBits({ additionalBits: additionalBitsAmount }));
  }

  return (
    <>
      <button
        onClick={() => confirm("This will reset all data ") && dispatch(resetGameData()) && dispatch(resetUpgrades())}
      >
        Reset
      </button>
      <button onClick={() => addBitsButton()}>Add Bits</button>
    </>
  );
}
