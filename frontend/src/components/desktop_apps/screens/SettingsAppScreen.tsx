import { addBits, IGameData, resetGameData, sellData } from "../../../slices/gameDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { IGameState } from "../../../store";
import { resetStyle } from "../../../slices/styleDataSlice";

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
        dispatch(addBits(additionalBitsAmount));
      }
    }
  }

  return (
    <>
      <button onClick={() => confirm("This will reset all data ") && dispatch(resetGameData())}>Reset game data</button>
      <button onClick={() => confirm("This will reset all style data ") && dispatch(resetStyle())}>
        Reset style data
      </button>
      <button onClick={() => confirm("This will give you the Bits of your dreams ") && addBitsButton()}>
        Add Bits
      </button>
      <p>Lifetime Bits: {gameData.totalNumBits}</p>
    </>
  );
}
