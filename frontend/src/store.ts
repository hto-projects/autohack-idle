import { configureStore } from "@reduxjs/toolkit";
import authSlice, { IAuthData } from "./slices/authSlice";
import apiSlice from "./slices/apiSlice";
import gameDataSlice, { addBits, IGameData, saveCurrentTime } from "./slices/gameDataSlice";
import throttle from "lodash/throttle";
import styleDataSlice, { IStyleData } from "./slices/styleDataSlice";
import { Temporal } from "temporal-polyfill";
import { calculateVariableValue } from "../../shared/util";
import { GameVariable } from "../../shared/types";

export interface IpreviousLoginInfo {
  bits: number;
  durationObj: Temporal.Duration;
}

export const previousLoginInfo: IpreviousLoginInfo = {
  bits: 0,
  durationObj: undefined
};

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
    const previousLoginTime = deserializedState.gameData.previousLoginTime;
    const acquiredUps = deserializedState.gameData.ups.acquired;
    previousLoginInfo.durationObj = Temporal.Instant.from(previousLoginTime).until(Temporal.Now.instant(), {
      largestUnit: "hour"
    });
    const deltaSeconds = previousLoginInfo.durationObj.total("seconds");
    const autoBitAmount = calculateVariableValue(acquiredUps, GameVariable.AutoBitGatheringAmount);
    const autoBitInterval = calculateVariableValue(acquiredUps, GameVariable.AutoBitGatheringInterval);

    if (!isNaN(autoBitAmount) && !isNaN(autoBitInterval)) {
      const bitsToAdd = Math.floor((deltaSeconds * autoBitAmount) / (autoBitInterval / 1000));
      deserializedState.gameData.numBits += bitsToAdd;
      previousLoginInfo.bits = bitsToAdd;
    }
  } catch (e) {} // if any of the code errors just continue

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
    store.dispatch(saveCurrentTime());
    saveState(store.getState());
  }, 1000)
);

export default store;
