import { createSlice } from "@reduxjs/toolkit";
import {
  deleteProjectThunk,
  getAllProjectThunk,
  getProjectDetailThunk,
  updateProjectThunk,
} from "./thunk";
import { PrjDetail, Project } from "../../types/quanLyProject";

type QuanLyProjectInitialState = {
  allProject: Project[];
  prjDetail: PrjDetail;
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
      });
  },
});

export const { reducer: quanLyProjectReducer, actions: quanLyProjectActions } =
  quanLyProjectSlice;
