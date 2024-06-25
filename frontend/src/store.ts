import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import gameDataReducer from './slices/gameDataSlice';
import upgradesSlice from "./slices/upgradesSlice";
import { apiSlice } from './slices/apiSlice';
import throttle from 'lodash/throttle';
import { IGameData, IUpgrade } from '../../shared/types';

export interface IGameState {
  auth: { userInfo };
  gameData: IGameData;
  upgrades: { availableUpgrades: IUpgrade[] }
};

const loadState = () => {
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

const saveState = (state: IGameState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
}

const loadedState = loadState();
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    gameData: gameDataReducer,
    upgrades: upgradesSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
  preloadedState: loadedState
});

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

export default store;
