import { createSlice } from "@reduxjs/toolkit";
import {
  deleteProjectThunk,
  getAllProjectThunk,
  getProjectCategoryThunk,
  getProjectDetailThunk,
  updateProjectThunk,
} from "./thunk";
import { PrjDetail, Project, ProjectCreated } from "../../types/quanLyProject";

type QuanLyProjectInitialState = {
  allProject: Project[];
  prjDetail: PrjDetail;
  prjCategory: ProjectCreated[];
};

const initialState: QuanLyProjectInitialState = {
  allProject: [],
  prjDetail: {
    alias: "",
    creator: {
      id: 0,
      name: "",
    },
    description: "",
    id: 0,
    lstTask: [],
    members: [],
    projectCategory: {
      id: 0,
      name: "",
    },
    projectName: "",
  },
  prjCategory: [],
};

const quanLyProjectSlice = createSlice({
  name: "quanLyProject",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjectThunk.fulfilled, (state, { payload }) => {
        state.allProject = payload;
      })
      .addCase(getProjectDetailThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          state.prjDetail = payload;
        }
      })
      .addCase(getProjectCategoryThunk.fulfilled, (state, { payload }) => {
        state.prjCategory = payload;
      });
  },
});

export const { reducer: quanLyProjectReducer, actions: quanLyProjectActions } =
  quanLyProjectSlice;
