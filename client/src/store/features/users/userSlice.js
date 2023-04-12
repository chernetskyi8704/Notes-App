import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
    },
    logout: (state, action) => {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
