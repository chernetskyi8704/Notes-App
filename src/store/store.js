import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";

export const store = configureStore({
  reducer: {
    auth: userReducer,
  },
});
