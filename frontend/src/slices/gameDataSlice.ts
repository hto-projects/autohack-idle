import { createSlice } from "@reduxjs/toolkit";
import { IGameData } from "../../../shared/types";
import apiSlice from "./apiSlice";
import { EventBus } from "../game/EventBus";
import { starterUpgrades } from "../../../shared/upgrades";

const GAME_API_PATH = "/api/game-data";

const initialState: IGameData = {
  numBits: 0,
  totalNumBits: 0,
  currencyAmount: 0,
  userEmail: "",
  acquired: [],
  purchasable: [],
  unavailable: [],
  uncategorized: starterUpgrades
};

const gameDataSlice = createSlice({
  name: "gameData",
  initialState: initialState,
  reducers: {
    addBits: (state, action) => {
      state.numBits += action.payload.additionalBits;
      state.totalNumBits += action.payload.additionalBits;
    },
    sellData: (state) => {
      state.currencyAmount += state.numBits / 10.0;
      state.numBits = 0;
    },
    purchaseUpgrade: (state, action) => {
      const up = action.payload.upgradeToPurchase;
      state.currencyAmount -= up.cost;
      state.acquired.push(up);
      state.purchasable.splice(state.purchasable.indexOf(up), 1);
      EventBus.emit(
        "upgrade-purchased",
        state.acquired.map((up) => {
          up.name;
        })
      );
    },
    categorizeUpgrades: (state) => {
      while (state.uncategorized.length > 0) {
        const currUp = state.uncategorized[0];
        let hasPrereqs = true;
        for (const prereq of currUp.preReqs) {
          let prereqInAquired = false;
          for (const acquired of state.acquired) {
            if (prereq === acquired.name) {
              prereqInAquired = true;
              break;
            }
          }
          if (!prereqInAquired) {
            hasPrereqs = false;
            break;
          }
        }
        const [newPurchasable] = state.uncategorized.splice(0, 1);
        if (hasPrereqs) {
          state.purchasable.push(newPurchasable);
        } else {
          state.unavailable.push(newPurchasable);
        }
      }
    },
    resetGameData: (_state) => initialState
    // Not being used currently?
    // setGameData: (state, action) => {
    //   state.currencyAmount = action.payload.currencyAmount;
    //   state.numBits = action.payload.numBits;
    //   state.upgrades = action.payload.upgrades;
    // },
  }
});

const gameDataApiSlice = apiSlice.injectEndpoints({
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
export const { addBits, sellData, purchaseUpgrade, resetGameData } = gameDataSlice.actions;
export default gameDataSlice;
