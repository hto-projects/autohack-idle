import { createSlice } from "@reduxjs/toolkit";
import { IUpgrade } from "../../../shared/types";
import { starterUpgrades } from "../../../shared/upgrades";
import { resetGameData } from "./gameDataSlice";
import { ReducerWithInitialState } from "@reduxjs/toolkit/dist/createReducer";

const initialState: { availableUpgrades: IUpgrade[] } = {
  availableUpgrades: starterUpgrades
};

const upgradesSlice = createSlice({
  name: "upgrades",
  initialState: initialState,
  reducers: {
    resetUpgrades(state) {
      state.availableUpgrades = starterUpgrades;
    }
  }
});

export default upgradesSlice;
export const { resetUpgrades } = upgradesSlice.actions;
