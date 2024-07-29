import { addBits, puzzzleSolve, resetGameData } from "../../../slices/gameDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { resetUpgrades } from "../../../slices/upgradesSlice";
import { IGameData } from "../../../../../shared/types";
import { IGameState } from "../../../store";

export default function SettingsAppScreen() {
  const dispatch = useDispatch();
  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);

  function addBitsButton() {
    let additionalBitsAmount = Number(prompt("Enter the amount of Bits you want."));
    if (additionalBitsAmount === null || Number.isNaN(additionalBitsAmount)) {
      return;
    } // Courtesy of Arrowship
    if (gameData.numBits === Number.MAX_VALUE) {
      alert("Sorry, no can do");
    } else {
      if (Number(gameData.numBits + additionalBitsAmount) >= Number.MAX_VALUE) {
        alert("Please enter a lower amount of Bits to add");
        alert(addBitsButton);
      } else {
        dispatch(addBits({ additionalBits: additionalBitsAmount }));
      }
    }
  }

  return (
    <>
      <button
        onClick={() => confirm("This will reset all data ") && dispatch(resetGameData()) && dispatch(resetUpgrades())}
      >
        Reset
      </button>

      <button onClick={() => confirm("This will give you the Bits of your dreams ") && addBitsButton()}>
        Add Bits
      </button>

      <button
        onClick={() =>
          confirm("This solve all of puzzle set 1 ") &&
          dispatch(puzzzleSolve("Make a Collect All Button")) &&
          dispatch(puzzzleSolve("Make a Collect All Function")) &&
          dispatch(puzzzleSolve("Make a Bits Array")) &&
          dispatch(puzzzleSolve("Make a For Loop to Collect all Bits")) &&
          dispatch(puzzzleSolve("Make the Complete Collect All Upgrade"))
        }
      >
        Solve Puzzle Set 1
      </button>
    </>
  );
}
