import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notesSettings: {
    showColorButtons: false,
    isEdit: false,
    isAddNew: false,
    currentNote: null,
    currentColor: "",
  },
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setShowColorButtons: {
      reducer(state, action) {
        state.notesSettings.showColorButtons = action.payload;
      },
    },
    setEdit: {
      reducer(state, action) {
        state.notesSettings.isEdit = action.payload;
      },
    },
    setAddNew: {
      reducer(state, action) {
        state.notesSettings.isAddNew = action.payload;
      },
    },
    setCurrentNote: {
      reducer(state, action) {
        state.notesSettings.currentNote = action.payload;
      },
    },
    setCurrentColor: {
      reducer(state, action) {
        state.notesSettings.currentColor = action.payload;
      },
    },
  },
});

export const allNotesSettings = state => state.notes.notesSettings;

export const { setShowColorButtons, setEdit, setAddNew, setCurrentNote, setCurrentColor } =
  notesSlice.actions;
export default notesSlice.reducer;
