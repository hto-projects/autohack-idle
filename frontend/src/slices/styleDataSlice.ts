import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TStyleFunction = {
  (key: string): boolean;
};

export interface IValidStyleFunctions {
  backgroundColor: TStyleFunction;
  textColor: TStyleFunction;
  textSize: TStyleFunction;
}

export const validStyleFunctions: IValidStyleFunctions = {
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
  textSize: (pixelSize) => {
    var check = new Option().style;
    check.fontSize = pixelSize;
    return check.fontSize === pixelSize;
  }
};

export interface IStyleData {
  backgroundColor: {
    titlebar: string;
    taskbar: string;
    desktop: string;
    window: string;
    horizontalbar: string;
    verticalbar: string;
  };
  textColor: {
    titlebar: string;
    taskbar: string;
    app: string;
  };
  textSize: {
    app: string;
  };
}

export const initialState: IStyleData = {
  backgroundColor: {
    titlebar: "#9caf88",
    taskbar: "#333",
    desktop: "url('assets/backgrounds/basic.png')",
    window: "lightgrey",
    horizontalbar: "#A69681",
    verticalbar: "#A69681"
  },
  textColor: {
    titlebar: "black",
    taskbar: "white",
    app: "white"
  },
  textSize: {
    app: "20px"
  }
};

const styleDataSlice = createSlice({
  name: "styleData",
  initialState: initialState,
  reducers: {
    setStyle: (state, action: PayloadAction<{ effect: string; target: string; value: string }>) => {
      state[action.payload.effect][action.payload.target] = action.payload.value;
    },
    resetStyle: (_state) => initialState
  }
});

export const { setStyle, resetStyle } = styleDataSlice.actions;
export default styleDataSlice;
