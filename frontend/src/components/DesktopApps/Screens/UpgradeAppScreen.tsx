import UpgradesContainer from "../../UpgradesContainer";
import { useDispatch } from "react-redux";
import { sellData } from "../../../slices/gameDataSlice";
import AutoCollector from "../AutoCollector";

export default function UpgradeAppScreen() {
  const dispatch = useDispatch();

  return (
    <>
      <UpgradesContainer></UpgradesContainer>
      <AutoCollector></AutoCollector>
      <button onClick={() => dispatch(sellData())}>Sell Data</button>
    </>
  );
}
