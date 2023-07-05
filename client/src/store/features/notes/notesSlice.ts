import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { INote } from "../../../types/INote";

interface INotesSettings {
  showColorButtons: boolean;
  isEdit: boolean;
  isAddNew: boolean;
  currentNote: INote | null;
  currentColor: string;
}

const notesSettings: INotesSettings = {
  showColorButtons: false,
  isEdit: false,
  isAddNew: false,
  currentNote: null,
  currentColor: "",
};

export const notesSlice = createSlice({
  name: "notes",
  initialState: notesSettings,
  reducers: {
    setShowColorButtons: (state, action: PayloadAction<boolean>) => {
      state.showColorButtons = action.payload;
    },
    setEdit: (state, action: PayloadAction<boolean>) => {
      state.isEdit = action.payload;
    },
    setAddNew: (state, action: PayloadAction<boolean>) => {
      state.isAddNew = action.payload;
    },
    setCurrentNote: (state, action: PayloadAction<INote>) => {
      state.currentNote = action.payload;
    },
    setCurrentColor: (state, action: PayloadAction<string>) => {
      state.currentColor = action.payload;
    },
  },
});

export const allNotesSettings = (state: RootState) => state.notes;

export const {
  setShowColorButtons,
  setEdit,
  setAddNew,
  setCurrentNote,
  setCurrentColor,
} = notesSlice.actions;
export default notesSlice.reducer;
