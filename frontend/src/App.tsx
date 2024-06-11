import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { IRefPhaserGame, PhaserGame } from "./game/PhaserGame";
import AuthContainer from "./components/Auth/AuthContainer";
import { useDispatch, useSelector } from "react-redux";
import { addBit } from "./slices/gameDataSlice";
import BoxContainer from "./components/BoxContainer";
import Box from "./components/Box";
import { setGameData } from "./slices/gameDataSlice";
import {
  useSaveGameMutation,
  useLoadGameMutation
} from "./slices/gameDataSlice";
import { IGameData } from "../../shared/types";
import Profile from "./components/Auth/Profile";
import UpgradesContainer from "./components/UpgradesContainer";

const App = () => {
  const gameData: IGameData = useSelector((state: any) => state.gameData);
  const { userInfo } = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();

  //  References to the PhaserGame component (game and scene are exposed)
  const phaserRef = useRef<IRefPhaserGame | null>(null);

  const [saveGame, saveMutationStatus] = useSaveGameMutation();
  const saveGameClicked = async (e) => {
    e.preventDefault();

    try {
      const res = await saveGame(gameData).unwrap();
      dispatch(setGameData(res));
      toast.success("Saved successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const [loadGame, loadMutationStatus] = useLoadGameMutation();
  const loadGameClicked = async (e) => {
    e.preventDefault();

    try {
      const loadData = {
        _id: userInfo._id
      };

      const res = await loadGame(loadData).unwrap();
      dispatch(setGameData(res));
      toast.success("Loaded successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div id="app">
        <div id="main" className="fullscreen">
          <PhaserGame ref={phaserRef} />
        </div>
        <BoxContainer>
          <Box smallIcon={"A"}>
            <AuthContainer></AuthContainer>
            <Profile></Profile>
          </Box>
          <Box smallIcon={"B"}>
            <p>{`Num Bits: ${gameData.numBits}`}</p>
            <button onClick={() => dispatch(addBit())}>Add Bit</button>
            {userInfo && <button onClick={saveGameClicked}>Save</button>}
            {userInfo && <button onClick={loadGameClicked}>Load</button>}
            <UpgradesContainer></UpgradesContainer>
          </Box>
        </BoxContainer>
      </div>
    </>
  );
};

export default App;
