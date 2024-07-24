import UpgradesContainer from "../../UpgradesContainer";
import { useDispatch } from "react-redux";
import { sellData1 } from "../../../slices/gameDataSlice";
import { sellData2 } from "../../../slices/gameDataSlice";

export default function UpgradeAppScreen() {
  const dispatch = useDispatch();

  return (
    <>
      <UpgradesContainer></UpgradesContainer>
      <button onClick={() => dispatch(sellData1())}>Sell Data to Trustworthy Organazations</button>
      <button onClick={() => dispatch(sellData2())}>Sell Data to Shady Organazations</button>
    </>
  );
}
