import { resetGameData } from "../../../slices/gameDataSlice";
import { useDispatch } from "react-redux";
import { resetUpgrades } from "../../../slices/upgradesSlice";

export default function SettingsAppScreen() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => confirm("test") && dispatch(resetGameData()) && dispatch(resetUpgrades())}>Reset</button>
    </>
  );
}
