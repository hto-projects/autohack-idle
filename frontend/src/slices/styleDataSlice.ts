import { ReactElement } from "react";
import { IStyleData } from "../../../shared/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IStyleData = { titleBarColor: "#9caf88" };

const styleDataSlice = createSlice({
  name: "styleData",
  initialState: initialState,
  reducers: {
    setStyle: (state, action) => {
      // for (let i = 0; i < state.length; i++) {
      //   if ((action.payload.property = state[i].property)) {
      //     state[i].value = action.payload.value;
      //     return;
      //   }
      // }
      console.log(action.payload.property);
      console.log(action.payload.value);
      if (state[action.payload.property] === undefined) {
        console.log("error, style not found");
        return;
      }
      state[action.payload.property] = action.payload.value;
    },
    resetStyle: (_state) => initialState
  }
});
export const { setStyle } = styleDataSlice.actions;
export default styleDataSlice;
