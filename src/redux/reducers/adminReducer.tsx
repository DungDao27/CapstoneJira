import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DispatchType } from "../store";
import axios, { ResponseType } from "axios";
import { USER_LOGIN, getStoreJson } from "../../utility/config";
import Swal from "sweetalert2";


export interface deleteUser {
  id : string;
}
export interface UserId {
  id: string | undefined
}

export interface User {
  id : string;
  name : string;
  email: string;
  phoneNumber: string;
}
export interface Adduser {
  // id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

interface AdminState {
  userList: User[];
  addUser: Adduser | null,
  deleteUser: deleteUser[];
}

const initialState: AdminState = {
  userList: [],
  addUser: null,
  deleteUser: [],
};

const adminReducer = createSlice({
  name: "adminReducer",
  initialState,
  reducers: {
    getUserListAction: (state, action) => {
      state.userList = action.payload;
    },
    addUserAction: (state, action) => {
      state.addUser = action.payload
    },
    deleteUserAction: (state, action) => {
      state.deleteUser = state.deleteUser.filter(item => item.id !== action.payload)
    },
  },
});

export const { getUserListAction, addUserAction,deleteUserAction } = adminReducer.actions;

export default adminReducer.reducer;

export const getUserListApi = () => {
  return async (dispatch: DispatchType) => {
    try {
      const res = await axios({
        url: "https://jiranew.cybersoft.edu.vn/api/Users/getUser",
        method: "GET",
        headers: {
          Authorization: `Bearer ${getStoreJson(USER_LOGIN).accessToken}`,
          TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NSIsIkhldEhhblN0cmluZyI6IjA4LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMTk5MzYwMDAwMCIsIm5iZiI6MTY3MjA3NDAwMCwiZXhwIjoxNzAyMTQxMjAwfQ.1MKFgiR_REeXZ8RKBhPFQLyitVek8kDJ3u1JPaCB1MU`
        },
      });
      const action = getUserListAction(res.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const addUserApi = (user: Adduser) => {
  return async (dispatch: DispatchType) => {
    try {
      const res = await axios({
        url: 'https://jiranew.cybersoft.edu.vn/api/Users/signup',
        method: 'POST',
        headers: {
          TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NSIsIkhldEhhblN0cmluZyI6IjA4LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMTk5MzYwMDAwMCIsIm5iZiI6MTY3MjA3NDAwMCwiZXhwIjoxNzAyMTQxMjAwfQ.1MKFgiR_REeXZ8RKBhPFQLyitVek8kDJ3u1JPaCB1MU`
        },
        data: user
      })
      const action = addUserAction(res.data.content);
      dispatch(action)
      alert('User is added')
    } catch (err) {
      console.log(err)
    }
  }
}