import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DispatchType } from '../store';
import axios from 'axios';
import { history } from '../..';
import { USER_LOGIN, getStoreJson, setStoreJson } from '../../utility/config';
import Swal from 'sweetalert2';

export interface AddProject  {
    id: number;
    projectName: string;
    description: string;
    categoryId: number;
    alias: string;
    deleted: boolean;
    creator: number;
  };
export type Member = {
    userId: number;
    name: string;
    avatar: string;
}; 
export type Project = AddProject & {
    categoryName: string;
    creator: {
      id: number;
      name: string;
    };
    members: Member[];
  };
export type ProjectDetail = {
    alias: string;
    creator: {
      id: number;
      name: string;
    };
    description: string;
    id: number;
    lstTask: [];
    members: Member[];
    projectCategory: {
      id: number;
      name: string;
    };
    projectName: string;
};
  
// export type ProjectEdit = {
//     id: number;
//     projectName: string;
//     creator: number;
//     description: string;
//     categoryId: number;
// };
interface ProjectState {
    projectList: Project[];
    addProject: AddProject | null,
  }
  
const initialState: ProjectState = {
    projectList: [],
    addProject: null,
};
const projectReducer = createSlice({
    name: "projectReducer",
    initialState,
    reducers: {
      getProjectListAction: (state, action) => {
        state.projectList = action.payload;
      },
      addProjectAction: (state, action) => {
        state.addProject = action.payload
      },
    },
});
export const { getProjectListAction, addProjectAction } = projectReducer.actions;

export default projectReducer.reducer;

export const getProjectListApi = () => {
    return async (dispatch: DispatchType) => {
      try {
        const res = await axios({
          url: "https://jiranew.cybersoft.edu.vn/api/Project/getAllProject",
          method: "GET",
          headers: {
            TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NSIsIkhldEhhblN0cmluZyI6IjA4LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMTk5MzYwMDAwMCIsIm5iZiI6MTY3MjA3NDAwMCwiZXhwIjoxNzAyMTQxMjAwfQ.1MKFgiR_REeXZ8RKBhPFQLyitVek8kDJ3u1JPaCB1MU`
          },
        });
        const action = getProjectListAction(res.data.content);
        dispatch(action);
      } catch (err) {
        console.log(err);
      }
    };
  };