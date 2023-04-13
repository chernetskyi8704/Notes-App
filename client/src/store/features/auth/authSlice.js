import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isAuth: false,
  },
  reducers: {
    setCredential: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.isAuth = true;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      state.isAuth = false;
    },
  },
});

export const { setCredential, logOut } = authSlice.actions;
export default authSlice.reducer;
