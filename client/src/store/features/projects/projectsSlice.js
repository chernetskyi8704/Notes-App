import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProjectsStore = createAsyncThunk(
  "post/getProjects",
  async () => {
    const response = await fetch("https://api.npoint.io/330476ee1cf37edbfd70");
    const data = await response.json();

    return data;
  }
);

const initialState = {
  projectsState: {
    projects: [],
    isLoading: false,
    isDataFetched: false,
  },
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setIsDataFetched: {
      reducer(state, action) {
        state.projectsState.isDataFetched = action.payload;
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProjectsStore.pending, (state, action) => {
        state.projectsState.isLoading = true;
      })
      .addCase(getProjectsStore.fulfilled, (state, action) => {
        state.projectsState.projects = action.payload;
        state.projectsState.isLoading = false;
      })
      .addCase(getProjectsStore.rejected, (state, action) => {
        state.projectsState.isLoading = false;
      });
  },
});

export const selectProjectsState = state => state.projects.projectsState;
export const { setIsDataFetched } = projectsSlice.actions;

export default projectsSlice.reducer;
