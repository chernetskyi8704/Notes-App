import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../types/IUser";
import { RootState } from "../../store";

interface IAuthSettings {
  user: IUser | null;
  token: string | null;
  isAuth: boolean;
  userId: IUser["id"] | null;
}

const authSettings: IAuthSettings = {
  user: null,
  token: null,
  isAuth: false,
  userId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authSettings,
  reducers: {
    setCredential: (state, action: PayloadAction<{user: IUser, accessToken: string}>) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.isAuth = true;
      state.userId = user.id;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.isAuth = false;
      state.userId = null;
    },
  },
});

export const allAuthSettings = (state: RootState) => state.auth;
export const { setCredential, logOut } = authSlice.actions;

export default authSlice.reducer;
