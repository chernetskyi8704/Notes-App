import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IProject } from "../../../types/IProject";

export const getProjectsStore = createAsyncThunk(
  "post/getProjects",
  async (): Promise<IProject[]> => {
    const response = await fetch(import.meta.env.VITE_API_PROJECTS_URL);
    const data: IProject[] = await response.json();

    return data;
  }
);

interface IProjectState {
  projects: IProject[];
  isLoading: boolean;
  isDataFetched: boolean;
}

const projectsState: IProjectState = {
  projects: [],
  isLoading: false,
  isDataFetched: false,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState: projectsState,
  reducers: {
    setIsDataFetched: (state, action: PayloadAction<boolean>) => {
      state.isDataFetched = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProjectsStore.pending, (state, _action) => {
        state.isLoading = true;
      })
      .addCase(getProjectsStore.fulfilled, (state, action) => {
        state.projects = action.payload;
        state.isLoading = false;
      })
      .addCase(getProjectsStore.rejected, (state, _action) => {
        state.isLoading = false;
      });
  },
});

export const selectProjectsState = (state: RootState) => state.projects;
export const { setIsDataFetched } = projectsSlice.actions;

export default projectsSlice.reducer;