import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/auth/authSlice";
import notesReducer from "./features/notes/notesSlice";
import projectsReducer from "./features/projects/projectsSlice";
import accountSettingsReducer from "./features/accountSettings/accountSettingsSlice";
import { customApiSlice } from "../api/apiSlice";

const rootReducer = combineReducers({
  [customApiSlice.reducerPath]: customApiSlice.reducer,
  auth: authReducer,
  notes: notesReducer,
  projects: projectsReducer,
  accountSettings: accountSettingsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(customApiSlice.middleware),
  devTools: false,
});

export const persistor = persistStore(store);
export default store;

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
