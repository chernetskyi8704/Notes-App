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
  projects: [],
  isLoading: false,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProjectsStore.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProjectsStore.fulfilled, (state, action) => {
        state.projects = action.payload;
        state.isLoading = false;
      })
      .addCase(getProjectsStore.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const allProjectsData = state => state.projects.projects;
export const selectIsLoading = state => state.projects.isLoading;

export default projectsSlice.reducer;
