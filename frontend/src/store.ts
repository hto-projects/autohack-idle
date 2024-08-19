import { configureStore } from "@reduxjs/toolkit";
import authSlice, { IAuthData } from "./slices/authSlice";
import apiSlice from "./slices/apiSlice";
import gameDataSlice, { IGameData, saveCurrentTime } from "./slices/gameDataSlice";
import throttle from "lodash/throttle";
import styleDataSlice, { IStyleData } from "./slices/styleDataSlice";
import { useDispatch } from "react-redux";
import { Temporal } from "temporal-polyfill";

export interface IGameState {
  styleData: IStyleData;
  auth: IAuthData;
  gameData: IGameData;
}

function loadState() {
  let deserializedState: IGameState;
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    deserializedState = JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }

  try {
    console.log(deserializedState);
    const previousLoginTimeSerialized = deserializedState?.gameData?.previousLoginTime;
    if (!["", undefined].includes(previousLoginTimeSerialized)) {
      const currTime = Temporal.Now.instant().until(Temporal.Instant.from(previousLoginTimeSerialized));
      console.log(currTime);
    }
  } catch (e) {}
  return deserializedState;
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
    dispatch(saveCurrentTime());
    saveState(store.getState());
  }, 1000)
);

export default store;
