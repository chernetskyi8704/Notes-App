import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notesSettings: {
    isModal: false,
    isEdit: false,
    isAddNew: false,
    foundNotes: [],
    currentNote: [],
    openedNote: [],
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
    editNote: {
      reducer(state, action) {
        const { id, color } = action.payload;
        state.notesSettings.isEdit = true;
        state.notesSettings.isModal = true;
        state.notesSettings.currentColor = color;
        const findEditedNote = state.notes.filter(note => {
          if (note.id === id) {
            return note;
          }
        });
        state.notesSettings.currentNote = findEditedNote;
      },
    },
    showColorButtons: {
      reducer(state, action) {
        state.notesSettings.isAddNew = !state.notesSettings.isAddNew;
        state.notesSettings.isEdit = false;
      },
    },
    openForm: {
      reducer(state, action) {
        const color = action.payload;
        state.notesSettings.currentColor = color;
        state.notesSettings.isModal = true;
        state.notesSettings.currentNote = null;
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
  showColorButtons,
  openForm,
  updateFoundNotes,
  setNotesSettings,
} = notesSlice.actions;
export default notesSlice.reducer;
