import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allAccountSettings: {
    isModalWindowWithSettingsOpen: false,
    isModalWindowWithDeleteAccountFormOpen: false,
  },
};

export const accountSetingsSlice = createSlice({
  name: "accountSettings",
  initialState,
  reducers: {
    setIsModalWindowWithSettingsOpen: {
      reducer(state, action) {
        state.allAccountSettings.isModalWindowWithSettingsOpen = action.payload;
      },
    },
    setIsModalWindowWithDeleteAccountFormOpen: {
      reducer(state, action) {
        state.allAccountSettings.isModalWindowWithDeleteAccountFormOpen =
          action.payload;
      },
    },
  },
});

export const allAccountSettings = state =>
  state.accountSettings.allAccountSettings;

export const {
  setIsModalWindowWithSettingsOpen,
  setIsModalWindowWithDeleteAccountFormOpen,
} = accountSetingsSlice.actions;
export default accountSetingsSlice.reducer;
