import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (arg, { dispatch }) => {
    try {
      const response = await fetch(`http://localhost:5000/api/refresh`, {
        method: "GET",
        credentials: "include",
      });

      if (response.status === 401) {
        dispatch(logOut());
        return;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isAuth: false,
    userId: null,
    isUpdateLoading: false,
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
  extraReducers: builder => {
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.isAuth = true;
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
    });
  },
});

export const { setCredential, logOut } = authSlice.actions;
export default authSlice.reducer;
