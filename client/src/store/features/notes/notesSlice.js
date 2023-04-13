import { createSlice, nanoid } from "@reduxjs/toolkit";

const currentData = new Date().toLocaleDateString();

const initialState = {
  notes: [
    {
      id: nanoid(),
      title: "Note 1",
      description: "Description 1",
      date: currentData,
      color: "#6E9ECF",
    },
    {
      id: nanoid(),
      title: "Note 2",
      description: "Description 2",
      date: currentData,
      color: "#9acd32",
    },
    {
      id: nanoid(),
      title: "Note 4",
      description: "Description 3",
      date: currentData,
      color: "#d2b48c",
    },
  ],
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
    addNote: {
      reducer(state, action) {
        state.notes.push(action.payload);
        state.notesSettings.isModal = false;
        state.notesSettings.isAddNew = false;
      },
      prepare(title, description, currentColor) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            date: currentData,
            color: currentColor,
          },
        };
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
    updateNote: {
      reducer(state, action) {
        const { id, title, description } = action.payload;
        state.notes = state.notes.map(note => {
          if (note.id === id) {
            return {
              ...note,
              title,
              description,
              date: currentData,
            };
          }
          state.notesSettings.isEdit = false;
          state.notesSettings.isModal = false;
          return note;
        });
      },
    },
    closeModal: {
      reducer(state, action) {
        state.notesSettings.isModal = false;
        state.notesSettings.isEdit = false;
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
  addNote,
  deleteNote,
  openNote,
  editNote,
  updateNote,
  closeModal,
  showColorButtons,
  openForm,
  updateFoundNotes,
} = notesSlice.actions;
export default notesSlice.reducer;
