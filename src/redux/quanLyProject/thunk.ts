import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyProjectServices } from "../../services/quanLyProject";

export const getAllProjectThunk = createAsyncThunk(
  "quanLyProject/getAllProjectThunk",
  async () => {
    try {
      const data = await quanLyProjectServices.getAllProject();

      return data.data.content;
    } catch (error) {
      console.log(error);
    }
  }
);
