import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUpgrade } from "../../../shared/types";
import apiSlice from "./apiSlice";
import { EventBus } from "../game/EventBus";
import { allUpgrades } from "../../../shared/upgrades";
import { flatObjByProp, intersection } from "../../../shared/util";

const GAME_API_PATH = "/api/game-data";

export interface IUpgradesData {
  acquired: IUpgrade[];
  purchasable: IUpgrade[];
  unavailable: IUpgrade[];
  uncategorized: IUpgrade[];
}

export interface IGameData {
  numBits: number;
  totalNumBits: number;
  currencyAmount: number;
  userEmail: string;
  ups: IUpgradesData;
  solvedPuzzles: string[];
}

const initialState: IGameData = {
  numBits: 0,
  totalNumBits: 0,
  currencyAmount: 0,
  userEmail: "",
  ups: {
    acquired: [],
    purchasable: [],
    unavailable: [],
    uncategorized: allUpgrades
  },
  solvedPuzzles: []
};

const gameDataSlice = createSlice({
  name: "gameData",
  initialState: initialState,
  reducers: {
    addBits: (state, action: PayloadAction<number>) => {
      state.numBits += action.payload;
      state.totalNumBits += action.payload;
    },
    sellData: (state) => {
      state.currencyAmount += state.numBits / 10.0;
      state.numBits = 0;
    },
    purchaseUpgrade: (state, action: PayloadAction<IUpgrade>) => {
      const ups = state.ups;
      const upgrade = action.payload;
      state.currencyAmount -= upgrade.cost;
      ups.acquired.push(upgrade);
      let index = -1;
      for (let i = 0; i < ups.purchasable.length; i++) {
        if (upgrade.name == ups.purchasable[i].name) {
          index = i;
          break;
        }
      }
      if (index == -1) {
        console.log(`ERR: could not find index of upgrade: ${upgrade.name}`);
        return;
      }
      ups.purchasable.splice(index, 1);
      const purchasableBuffer: IUpgrade[] = [];
      const acquiredPrereqs = [...flatObjByProp(ups.acquired, "name"), ...state.solvedPuzzles];
      for (let i = 0; i < ups.unavailable.length; i++) {
        const currUp = ups.unavailable[i];
        const intersect = intersection(acquiredPrereqs, currUp.preReqs);
        if (intersect.length == currUp.preReqs.length) {
          const [newPurchasableUp] = ups.unavailable.splice(i, 1);
          purchasableBuffer.push(newPurchasableUp);
        }
      }
      ups.purchasable.push(...purchasableBuffer);
      EventBus.emit("upgrade-purchased", ups.acquired);
    },
    puzzleSolve: (state, action: PayloadAction<string>) => {
      // Debugging
      if (state.solvedPuzzles.includes(action.payload)) {
        console.log("Puzzle already in set");
      }
      state.solvedPuzzles.push(action.payload);
    },
    categorizeUpgrades: (state) => {
      const ups = state.ups;
      while (ups.uncategorized.length > 0) {
        const currUp = ups.uncategorized[0];
        let hasPrereqs = true;
        for (const prereq of currUp.preReqs) {
          let prereqInAquired = false;
          for (const acquired of ups.acquired) {
            if (prereq === acquired.name) {
              prereqInAquired = true;
              break;
            }
          }
          for (const puzzle of state.solvedPuzzles) {
            if (prereq === puzzle) {
              prereqInAquired = true;
              break;
            }
          }
          if (!prereqInAquired) {
            hasPrereqs = false;
            break;
          }
        }
        const [newPurchasable] = ups.uncategorized.splice(0, 1);
        if (hasPrereqs) {
          ups.purchasable.push(newPurchasable);
        } else {
          ups.unavailable.push(newPurchasable);
        }
      }
    },
    resetGameData: (_state) => initialState
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
export const { addBits, sellData, purchaseUpgrade, categorizeUpgrades, resetGameData, puzzleSolve } =
  gameDataSlice.actions;
// export const { addBits, sellData, purchaseUpgrade, resetGameData, puzzleSolve, setGameData } = gameDataSlice.actions;
export default gameDataSlice;
