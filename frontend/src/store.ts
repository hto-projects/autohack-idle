import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import apiSlice from "./slices/apiSlice";
import gameDataSlice from "./slices/gameDataSlice";
import throttle from "lodash/throttle";
import { IGameData, IStyleData } from "../../shared/types";
import styleDataSlice from "./slices/styleDataSlice";

export interface IGameState {
  auth: { userInfo };
  gameData: IGameData;
  completedPuzzles?: { solvedPuzzles };
  styleData: IStyleData;
}

function loadState() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

function saveState(state: IGameState) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

const loadedState = loadState();
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
    gameData: gameDataSlice.reducer,
    styleData: styleDataSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
  preloadedState: loadedState
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
