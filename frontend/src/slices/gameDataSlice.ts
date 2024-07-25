import { createSlice } from "@reduxjs/toolkit";
import { IGameData, UpgradeStatus } from "../../../shared/types";
import { apiSlice } from "./apiSlice";
import { EventBus } from "../game/EventBus";

const GAME_API_PATH = "/api/game-data";

const initialState: IGameData = {
  numBits: 0,
  totalNumBits: 0,
  currencyAmount: 0,
  userEmail: "",
  upgrades: [],
  savedSolvedPuzzles: [],
  trustySales: 0,
  shadySales: 0
};

export const gameDataSlice = createSlice({
  name: "gameData",
  initialState: initialState,
  reducers: {
    addBits: (state, action) => {
      state.numBits += action.payload.additionalBits;
      state.totalNumBits += action.payload.additionalBits;
    },
    sellData: (state, action) => {
      state.currencyAmount += state.numBits / 10.0;
      state.numBits = 0;
      if (action.payload.soldToTrusty) {
        state.trustySales += 1;
      } else {
        state.shadySales += 1;
      }
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
      state.savedSolvedPuzzles = action.payload.solvedPuzzles;
    },
    resetGameData: (state) => initialState,

    puzzzleSolve: (state, action) => {
      if (!state.savedSolvedPuzzles.includes(action.payload)) {
        state.savedSolvedPuzzles.push(action.payload);
        state.upgrades.push(action.payload);
      }
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
export const { addBits, setGameData, sellData, purchaseUpgrade, resetGameData, puzzzleSolve } = gameDataSlice.actions;
export default gameDataSlice.reducer;
