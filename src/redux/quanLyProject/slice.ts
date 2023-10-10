import { createSlice } from "@reduxjs/toolkit";
import { getAllProjectThunk } from "./thunk";
import { Project } from "../../types/quanLyProject";

type QuanLyProjectInitialState = {
  allProject: Project[];
};

const initialState: QuanLyProjectInitialState = {
  allProject: [],
};

const quanLyProjectSlice = createSlice({
  name: "quanLyProject",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProjectThunk.fulfilled, (state, { payload }) => {
      console.log("payload: ", payload.length);

      state.allProject = payload;
    });
  },
});

export const { reducer: quanLyProjectReducer, actions: quanLyProjectActions } =
  quanLyProjectSlice;
