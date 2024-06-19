import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import { IRefPhaserGame, PhaserGame } from "./game/PhaserGame";
import AuthContainer from "./components/Auth/AuthContainer";
import { useDispatch, useSelector } from "react-redux";
import { sellData } from "./slices/gameDataSlice";
import BoxContainer from "./components/BoxContainer";
import Box from "./components/Box";
import { IGameData } from "../../shared/types";
import UpgradesContainer from "./components/UpgradesContainer";
import AutoCollector from "./components/AutoCollector";

const App = () => {
  const gameData: IGameData = useSelector((state: any) => state.gameData);
  const dispatch = useDispatch();

  //  References to the PhaserGame component (game and scene are exposed)
  const phaserRef = useRef<IRefPhaserGame | null>(null);

  return (
    <>
      <div id="app">
        <div id="main" className="fullscreen">
          <PhaserGame ref={phaserRef} />
        </div>
        <BoxContainer>
          <Box smallIcon={"A"}>
            <AuthContainer></AuthContainer>
          </Box>
          <Box smallIcon={"B"}>
            <p>Numer of Bits: {gameData.numBits}</p>
            <p>Currency Amount: {gameData.currencyAmount}</p>
            <UpgradesContainer></UpgradesContainer>
            <button onClick={() => dispatch(sellData())}>Sell Data</button>
            <AutoCollector></AutoCollector>
          </Box>
        </BoxContainer>
      </div>
    </>
  );
};

export default App;
