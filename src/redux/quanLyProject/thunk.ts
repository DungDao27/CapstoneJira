import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyProjectServices } from "../../services/quanLyProject";
import { PrjUpdate, ProjectCreated } from "../../types/quanLyProject";
import { quanLyPrjCategoryService } from "../../services/quanLyPrjCategory";

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

export const deleteProjectThunk = createAsyncThunk(
  "quanLyProject/deleteProjectThunk",
  async (payload: number) => {
    try {
      const data = await quanLyProjectServices.deleteProject(payload);
      console.log(data);
      alert(data?.data?.message);
      window.location.reload();
    } catch (error: any) {
      const data = error?.response?.data?.content;
      alert(data);
      return data;
    }
  }
);

export const getProjectDetailThunk = createAsyncThunk(
  "quanLyProject/getProjectDetailThunk",
  async (payload: number) => {
    try {
      const response = await quanLyProjectServices.getProjectDetail(payload);
      return response.data.content;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateProjectThunk = createAsyncThunk(
  "quanLyProject/updateProjectThunk",
  async (payload: any) => {
    try {
      const data = await quanLyProjectServices.updateProject(
        payload,
        payload.id
      );
      alert(data?.data?.message);
      window.location.reload();
      return data;
    } catch (error: any) {
      const res = error?.response?.data?.content;
      alert(res);
    }
  }
);

export const getProjectCategoryThunk = createAsyncThunk(
  "quanLyProject/getProjectCategoryThunk",
  async () => {
    try {
      const data = await quanLyPrjCategoryService.getProjectCategory();
      return data.data.content;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createProjectThunk = createAsyncThunk(
  "quanLyProject/createProjectThunk",
  async (payload: any) => {
    try {
      const data = await quanLyProjectServices.createProject(payload);
      alert(data?.data?.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
);
