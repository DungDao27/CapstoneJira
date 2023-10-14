import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DispatchType } from "../store";
import axios, { ResponseType } from "axios";
import { USER_LOGIN, getStoreJson } from "../../utility/config";
import Swal from "sweetalert2";

export interface MyObject {
  taiKhoan: string | undefined
}

export interface CourseId {
  maKhoaHoc: string | undefined
}

export interface StudentsWaiting {
  taiKhoan: string;
  biDanh: string;
  hoTen: string;
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
  studentsWaiting: StudentsWaiting[] | null,
  studentsofCourse: StudentsWaiting[] | null,
  studentsUnregisterd: StudentsWaiting[] | null,
  addUser: Adduser | null,

}

const initialState: AdminState = {
  userList: [],
  studentsWaiting: [],
  studentsofCourse: [],
  studentsUnregisterd: [],
  addUser: null,
};

const adminReducer = createSlice({
  name: "adminReducer",
  initialState,
  reducers: {
    getUserListAction: (state, action) => {
      state.userList = action.payload;
    },
    getStudentsWatingAction: (state, action) => {
      state.studentsWaiting = action.payload
    },
    getStudentsofCourseAction: (state, action) => {
      state.studentsofCourse = action.payload
    },
    getStudentUnregisteredAction: (state, action) => {
      state.studentsUnregisterd = action.payload
    },
    addUserAction: (state, action) => {
      state.addUser = action.payload
    },
  },
});

export const {
  getUserListAction,
  getStudentsWatingAction,
  getStudentsofCourseAction,
  getStudentUnregisteredAction,
  addUserAction,
} = adminReducer.actions;

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
      const action = addUserAction(res.data);
      dispatch(action)
      alert('User is added')

    } catch (err) {
      console.log(err)

    }
  }
}

// export const getStudentsWatingApi = (courseId: CourseId) => {
//   return async (dispatch: DispatchType) => {
//     try {

//       const res = await axios({
//         url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet',
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${getStoreJson(USER_LOGIN).accessToken}`,
//           TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NSIsIkhldEhhblN0cmluZyI6IjA4LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMTk5MzYwMDAwMCIsIm5iZiI6MTY3MjA3NDAwMCwiZXhwIjoxNzAyMTQxMjAwfQ.1MKFgiR_REeXZ8RKBhPFQLyitVek8kDJ3u1JPaCB1MU`
//         },
//         data: courseId
//       })

//       const action = getStudentsWatingAction(res.data);
//       dispatch(action)

//     } catch (err) {
//       console.log(err)
//     }
//   }
// }

// export const getStudentsofCourseApi = (courseId: CourseId) => {
//   return async (dispatch: DispatchType) => {
//     try {
//       const res = await axios({
//         url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc',
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${getStoreJson(USER_LOGIN).accessToken}`,
//           TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NSIsIkhldEhhblN0cmluZyI6IjA4LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMTk5MzYwMDAwMCIsIm5iZiI6MTY3MjA3NDAwMCwiZXhwIjoxNzAyMTQxMjAwfQ.1MKFgiR_REeXZ8RKBhPFQLyitVek8kDJ3u1JPaCB1MU`
//         },
//         data: courseId
//       })

//       const action = getStudentsofCourseAction(res.data);
//       dispatch(action)

//     } catch (err) {
//       console.log(err)
//     }
//   }
// }

// export const getStudentsUnregisterdApi = (courseId: CourseId) => {
//   return async (dispatch: DispatchType) => {
//     try {
//       const res = await axios({
//         url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh',
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${getStoreJson(USER_LOGIN).accessToken}`,
//           TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NSIsIkhldEhhblN0cmluZyI6IjA4LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMTk5MzYwMDAwMCIsIm5iZiI6MTY3MjA3NDAwMCwiZXhwIjoxNzAyMTQxMjAwfQ.1MKFgiR_REeXZ8RKBhPFQLyitVek8kDJ3u1JPaCB1MU`
//         },
//         data: courseId
//       })
//       const action = getStudentUnregisteredAction(res.data);
//       dispatch(action)

//     } catch (err) {
//       console.log(err)
//     }
//   }
// }

