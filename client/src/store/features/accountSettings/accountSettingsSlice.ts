import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const accountSettings = {
  isModalWindowWithSettingsOpen: false,
  isModalWindowWithDeleteAccountFormOpen: false,
};

export const accountSetingsSlice = createSlice({
  name: "accountSettings",
  initialState: accountSettings,
  reducers: {
    setIsModalWindowWithSettingsOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalWindowWithSettingsOpen = action.payload;
    },
    setIsModalWindowWithDeleteAccountFormOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalWindowWithDeleteAccountFormOpen = action.payload;
    },
  },
});

export const allAccountSettings = (state: RootState) => state.accountSettings;
export const {
  setIsModalWindowWithSettingsOpen,
  setIsModalWindowWithDeleteAccountFormOpen,
} = accountSetingsSlice.actions;

export default accountSetingsSlice.reducer;
