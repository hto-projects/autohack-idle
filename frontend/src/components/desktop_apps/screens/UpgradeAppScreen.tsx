import UpgradesContainer from "../../UpgradesContainer";
import { useDispatch } from "react-redux";
import { sellData } from "../../../slices/gameDataSlice";

export default function UpgradeAppScreen() {
  const dispatch = useDispatch();

  return (
    <>
      <UpgradesContainer></UpgradesContainer>
      <button onClick={() => dispatch(sellData())}>Sell Data to Trustworthy Organazations</button>
      <button onClick={() => dispatch(sellData())}>Sell Data to Shady Organazations</button>
    </>
  );
}
