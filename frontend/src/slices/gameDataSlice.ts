import { createSlice } from "@reduxjs/toolkit";
import { IGameData, UpgradeStatus } from "../../../shared/types";
import { apiSlice } from "./apiSlice";
import { EventBus } from "../game/EventBus";
import upgradesSlice from "./upgradesSlice";
const GAME_API_PATH = "/api/game-data";

const initialState: IGameData = {
  numBits: 0,
  currencyAmount: 0,
  userEmail: "",
  upgrades: []
};
export const gameDataSlice = createSlice({
  name: "gameData",
  initialState: initialState,
  reducers: {
    addBit: (state) => {
      state.numBits += 1;
    },
    addBits: (state, action) => {
      state.numBits += action.payload.additionalBits;
    },
    sellData: (state) => {
      state.currencyAmount += Number((state.numBits / 10.0).toFixed(1));
      state.numBits = 0;
    },
    purchaseUpgrade: (state, action) => {
      state.currencyAmount -= action.payload.upgradeToPurchase.cost;
      state.upgrades.push(action.payload.upgradeToPurchase.name);
      EventBus.emit("upgrade-purchased", state.upgrades);
    },
    setGameData: (state, action) => {
      state.currencyAmount = action.payload.currencyAmount;
      state.numBits = action.payload.numBits;
      state.upgrades = action.payload.upgrades;
    },
    resetGameData: (state) => {
      state.currencyAmount = 0;
      state.numBits = 0;
      state.upgrades = [];
    }
  }
});

export const gameDataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    saveGame: builder.mutation({
      query: (data) => ({
        credentials: "include",
        url: `${GAME_API_PATH}/save`,
        method: "POST",
        body: data
      })
    }),
    loadGame: builder.mutation({
      query: () => ({
        credentials: "include",
        url: `${GAME_API_PATH}/load`,
        method: "GET"
      })
    })
  })
});

export const { useSaveGameMutation, useLoadGameMutation } = gameDataApiSlice;

export const { addBit, addBits, setGameData, sellData, purchaseUpgrade, resetGameData } = gameDataSlice.actions;
export default gameDataSlice.reducer;
