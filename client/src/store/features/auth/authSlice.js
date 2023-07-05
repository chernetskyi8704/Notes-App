import { createSlice } from "@reduxjs/toolkit";

const authSettings = {
  user: null,
  token: null,
  isAuth: false,
  userId: null,
  isUpdateLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authSettings,
  reducers: {
    setCredential: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.isAuth = true;
      state.userId = user.id;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      state.isAuth = false;
      state.userId = null;
    },
  },
});

export const allAuthSettings = state => state.auth;
export const { setCredential, logOut } = authSlice.actions;

export default authSlice.reducer;
