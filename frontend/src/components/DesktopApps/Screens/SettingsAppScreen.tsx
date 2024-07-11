import { addBits, resetGameData } from "../../../slices/gameDataSlice";
import { useDispatch } from "react-redux";
import { resetUpgrades } from "../../../slices/upgradesSlice";
export default function SettingsAppScreen() {
  const dispatch = useDispatch();

  function Money() {
    dispatch(addBits({ additionalBits: 1000 }));
  }

  return (
    <>
      <button
        onClick={() => confirm("This will reset all data ") && dispatch(resetGameData()) && dispatch(resetUpgrades())}
      >
        Reset
      </button>
      <button onClick={Money}>Unlimited Bits</button>
    </>
  );
}
