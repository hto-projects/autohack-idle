import { createSlice } from "@reduxjs/toolkit";
import { starterUpgrades } from "../../../shared/upgrades";
import { IUpgradesData } from "../../../shared/types";

const initialState: IUpgradesData = {
  acquired: [],
  purchasable: [],
  unavailable: [],
  uncategorized: starterUpgrades
};

const upgradesSlice = createSlice({
  name: "upgrades",
  initialState: initialState,
  reducers: {
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
    resetUpgrades: (_state) => initialState
  }
});

export const { resetUpgrades } = upgradesSlice.actions;
export default upgradesSlice;
