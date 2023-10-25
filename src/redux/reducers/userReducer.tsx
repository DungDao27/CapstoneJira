import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DispatchType } from '../store';
import axios from 'axios';
import { history } from '../..';
import { USER_LOGIN, getStoreJson, setStoreJson } from '../../utility/config';
import Swal from 'sweetalert2';

export interface UserSignUp {
    email: string,
    password: string,
    name: string,
    phoneNumber: string
}
export interface UserSignIn {
    accessToken?: string,
    email: string,
    password: string
}
export interface userId {
    id: string 
  }

export interface UserInfo {
    id: number;
    name: string;
    phoneNumber: string;
}
export interface UserEdit {
    id: string,
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
}
export interface deleteUser {
    id : string;
  }
interface Userstate {
    userSignUp: UserSignUp | null,
    userSignIn: UserSignIn | null,
    userInfo: UserInfo | null,
    userEdit: UserEdit | null,
    deleteUser: deleteUser[];
}
const initialState: Userstate = {
    userSignUp: null,
    userSignIn: null,
    userInfo: null,
    userEdit: null,
    deleteUser: [],
}

const userReducder = createSlice({
    name: 'userReducder',
    initialState,
    reducers: {
        signupAction: (state, action) => {
            state.userSignUp = action.payload
        },
        signinAction: (state, action) => {
            state.userSignIn = action.payload
        },
        getInfoAction: (state, action) => {
            state.userInfo = action.payload
        },
        editUserAction: (state, action) => {
            state.userEdit = action.payload
        },
        deleteUserAction: (state, action) => {
            state.deleteUser = state.deleteUser.filter(item => item.id !== action.payload)
        },
    }
});

export const { signupAction, signinAction, editUserAction, getInfoAction, deleteUserAction } = userReducder.actions

export default userReducder.reducer


export const signupActionApi = (userSignUp: UserSignUp) => {
    return async (dispatch: DispatchType) => {
        try {
            const res = await axios({
                url: 'https://jiranew.cybersoft.edu.vn/api/Users/signup',
                method: 'POST',
                headers: {
                    TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NSIsIkhldEhhblN0cmluZyI6IjA4LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMTk5MzYwMDAwMCIsIm5iZiI6MTY3MjA3NDAwMCwiZXhwIjoxNzAyMTQxMjAwfQ.1MKFgiR_REeXZ8RKBhPFQLyitVek8kDJ3u1JPaCB1MU`
                },
                data: userSignUp
            })

            const action: PayloadAction<UserSignUp> = signupAction(res.data.content);
            dispatch(action)
            alert('Đăng ký thành công')
        } catch (err) {
            console.log(err)
        }
    }
}


export const signinActionApi = (userSignIn: UserSignIn) => {
    return async (dispatch: DispatchType) => {
        try {
            const res = await axios({
                url: 'https://jiranew.cybersoft.edu.vn/api/Users/signin',
                method: 'POST',
                headers: {
                    TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NSIsIkhldEhhblN0cmluZyI6IjA4LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMTk5MzYwMDAwMCIsIm5iZiI6MTY3MjA3NDAwMCwiZXhwIjoxNzAyMTQxMjAwfQ.1MKFgiR_REeXZ8RKBhPFQLyitVek8kDJ3u1JPaCB1MU`
                },
                data: userSignIn
            })
            const action: PayloadAction<UserSignIn> = signinAction(res.data.content);
            dispatch(action)
            let timerInterval: NodeJS.Timeout;

            Swal.fire({
                title: `Hello ${userSignIn.email}!`,

                timer: 1000,

                didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer()?.querySelector('b');
                    if (b) {
                        timerInterval = setInterval(() => {
                            const timerLeft = Swal.getTimerLeft();
                            if (timerLeft !== undefined) {
                                b.textContent = timerLeft.toString();
                            }
                        }, 100);
                    }
                },
                willClose: () => {
                    clearInterval(timerInterval);
                },
            }).then((result) => {

                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer');
                }
            });
            setStoreJson(USER_LOGIN, res.data.content)
        } catch (err: any) {
            if (err.response.status = 500) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Xin thử lại. Hãy đảm bảo rằng tên tài khoản và mật khẩu của bạn là đúng',
                })
            }
            history.push('/')
            console.log(err)
        }
    }
}


export const editUserApi = (userEdit: UserEdit) => {
    return async (dispatch: DispatchType) => {
        try {
            const res = await axios({
                url: 'https://jiranew.cybersoft.edu.vn/api/Users/editUser',
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${getStoreJson(USER_LOGIN).accessToken}`,
                    TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NiIsIkhldEhhblN0cmluZyI6IjMxLzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNjY1OTIwMDAwMCIsIm5iZiI6MTY3ODI5NDgwMCwiZXhwIjoxNzA2ODA2ODAwfQ.RmFBx9ElL7VuYNzZnzMoGUHyC3iXKRpw7Yvq2LsXk0Q`
                },
                data: userEdit
            })
            console.log(res)
            const action: PayloadAction<UserEdit> = editUserAction(res.data.content);
            dispatch(action)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Profile is updated',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (err) {
            console.log(err)
        }
    }
}
export const deleteUserApi = (userId: string) => {
    return async (dispatch: DispatchType) => {
      try {
        const res = await axios({
          url: `https://jiranew.cybersoft.edu.vn/api/Users/deleteUser=${userId}`,
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${getStoreJson(USER_LOGIN).accessToken}`,
            TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NSIsIkhldEhhblN0cmluZyI6IjA4LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMTk5MzYwMDAwMCIsIm5iZiI6MTY3MjA3NDAwMCwiZXhwIjoxNzAyMTQxMjAwfQ.1MKFgiR_REeXZ8RKBhPFQLyitVek8kDJ3u1JPaCB1MU`
          },
        })
        dispatch(res.data.content)
  
      } 
      catch (err) {
        Swal.fire({
          icon: 'warning',
          title: 'Something went wrong',
  
        })
        console.log(err)
      }
    }
  }

