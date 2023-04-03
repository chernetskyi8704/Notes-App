import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";
import notesReducer from "./features/notes/notesSlice";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    notes: notesReducer,
  },
});
