import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthData {
  userInfo: any;
}

const initialState: IAuthData = {
  userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice;
