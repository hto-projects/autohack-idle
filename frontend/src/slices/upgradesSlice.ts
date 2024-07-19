import { createSlice } from "@reduxjs/toolkit";
import { starterUpgrades } from "../../../shared/upgrades";
import { IUpgradesData } from "../../../shared/types";

const initialState: IUpgradesData = {
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
