import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAccommodation } from "../../../interfaces/accommodation.interface";
import { IUserInfo } from "../../../interfaces/userInfo.interface";

type authState = { isLoggedIn: boolean; userInfo: IUserInfo };
const initialState: authState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
  userInfo: {
    name: JSON.parse(localStorage.getItem("userInfo")!)?.given_name,
    family_name: JSON.parse(localStorage.getItem("userInfo")!)?.family_name,
    email: JSON.parse(localStorage.getItem("userInfo")!)?.email,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state: authState, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
    },
    logIn: (state: authState, action: PayloadAction<any>) => {
      state.isLoggedIn = true;
    },
    logOut: (state: authState, action: PayloadAction<any>) => {
      state.isLoggedIn = false;
    },
  },
});
export const { logIn, logOut, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
