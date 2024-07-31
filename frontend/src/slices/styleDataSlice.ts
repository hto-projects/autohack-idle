import { ReactElement } from "react";
import { IStyleData } from "../../../shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Taskbar from "../components/desktop_apps/Taskbar";

export const validStyleFunctions = {
  backgroundColor: (strColor) => {
    var check = new Option().style;
    check.color = strColor;
    return check.color === strColor.toLowerCase();
  },
  textColor: (strColor) => {
    var check = new Option().style;
    check.color = strColor;
    return check.color === strColor.toLowerCase();
  },
  textFont: (fontType) => {
    return fontType;
  },
  textSize: (pixelSize) => {
    var check = new Option().style;
    check.fontSize = pixelSize;

    return check.fontSize === pixelSize;
  }
};

const initialState = {
  backgroundColor: {
    titlebar: "#9caf88",
    taskbar: "darkblue",
    desktop: "blue",
    window: "lightgrey"
  },
  textColor: {
    titlebar: "black",
    taskbar: "white",
    app: "white"
  },
  textSize: {
    app: "20px",
    taskbar: "20px",
    titlebar: "18px"
  },
  textFont: {
    app: "PixeloidMono",
    taskbar: "PixeloidMono",
    titlebar: "PixeloidMono",
    window: "PixeloidMono"
  }
};

const styleDataSlice = createSlice({
  name: "styleData",
  initialState: initialState,
  reducers: {
    setStyle: (state, action: PayloadAction<{ effect: string; target: string; value: string }>) => {
      state[action.payload.effect][action.payload.target] = action.payload.value;
      // console.log(action.payload.property);
      // console.log(action.payload.value);
      // if (state[action.payload.property] === undefined) {
      //   console.log("error, style not found");
      //   return;
      // }
      // state[action.payload.property] = action.payload.value;
    },
    resetStyle: (_state) => initialState
  }
});
export const { setStyle, resetStyle } = styleDataSlice.actions;
export default styleDataSlice;
