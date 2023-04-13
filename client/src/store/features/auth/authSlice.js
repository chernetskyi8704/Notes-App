import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isAuth: false,
    userId: null,
  },
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

export const { setCredential, logOut } = authSlice.actions;
export default authSlice.reducer;
