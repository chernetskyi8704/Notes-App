import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notesSettings: {
    isModal: false,
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
    setNotesSettings: {
      reducer(state, action) {
        state.notesSettings = action.payload;
      },
    },

    deleteNote: {
      reducer(state, action) {
        const noteId = action.payload;
        state.notes = state.notes.filter(note => note.id !== noteId);
      },
    },
    openNote: {
      reducer(state, action) {
        const id = action.payload;
        const openedNote = state.notes.filter(note => {
          if (note.id === id) {
            return note;
          }
        });
        state.notesSettings.openedNote = openedNote;
      },
    },
    updateFoundNotes: {
      reducer(state, action) {
        const newFoundNotes =
          action.payload === ""
            ? state.notes
            : state.notes.filter(note => {
                return note.title
                  .toLowerCase()
                  .includes(action.payload.toLowerCase());
              });
        state.notesSettings.foundNotes = newFoundNotes;
      },
    },
  },
});

export const allNotesSettings = state => state.notes.notesSettings;
export const selectAllNotes = state => state.notes.notes;

export const {
  deleteNote,
  openNote,
  editNote,
  closeModal,
  updateFoundNotes,
  setNotesSettings,
} = notesSlice.actions;
export default notesSlice.reducer;
