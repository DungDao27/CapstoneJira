import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DispatchType } from '../store';
import axios from 'axios';
import { USER_LOGIN, getStoreJson, setStoreJson } from '../../utility/config';
import Swal from 'sweetalert2';
import { history } from '../..';
export interface UserSignUp {

    // taiKhoan: string,
    // matKhau: string,
    // hoTen: string,
    // soDT: string,
    // maNhom: string,
    email: string,
    password: string,
    name: string,
    soDT: string

}
export interface UserSignIn {
    // taiKhoan: string,
    // matKhau: string,
    accessToken?: string,
    // maLoaiNguoiDung?: string,
    email: string,
    password: string

}

// export interface UserProfile {
//     chiTietKhoaHocGhiDanh: any[];
//     taiKhoan: string;
//     matKhau: string;
//     hoTen: string;
//     soDT: string;
//     maLoaiNguoiDung: string;
//     maNhom: string;
//     email: string;
// }
export interface UserEdit {
    id: string,
    email: string,
    password: string,
    name: string,
    soDT: string
}

interface Userstate {
    userSignUp: UserSignUp | null,
    userSignIn: UserSignIn | null,
    // userProfile: UserProfile | null
    userEdit: UserEdit | null,

}
const initialState: Userstate = {
    userSignUp: null,
    userSignIn: getStoreJson(USER_LOGIN),
    // userProfile: null,
    userEdit: null,

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
        // getProfileAction: (state, action) => {
        //     state.userProfile = action.payload
        // },

        editProfileAction: (state, action) => {
            state.userEdit = action.payload
        }
    }
});

export const { signupAction, signinAction, editProfileAction } = userReducder.actions

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

            const action: PayloadAction<UserSignUp> = signupAction(res.data);
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
            const action: PayloadAction<UserSignIn> = signinAction(res.data);
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
                    {
                        history.push ('/jira');
                    } 
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
                ,
            }).then((result) => {

                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer');
                }
            });
            setStoreJson(USER_LOGIN, res.data)
        } catch (err: any) {
            if (err.response.status = 500) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Xin thử lại. Hãy đảm bảo rằng tên tài khoản và mật khẩu của bạn là đúng',
                })
            }{
                history.push ('/');
            }  
            console.log(err)
        }
    }
}


export const editProfileApi = (userEdit: UserEdit) => {
    return async (dispatch: DispatchType) => {
        try {
            const res = await axios({
                url: 'https://jiranew.cybersoft.edu.vn/api/Users/editUser',
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${getStoreJson(USER_LOGIN).accessToken}`,
                    TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NSIsIkhldEhhblN0cmluZyI6IjA4LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMTk5MzYwMDAwMCIsIm5iZiI6MTY3MjA3NDAwMCwiZXhwIjoxNzAyMTQxMjAwfQ.1MKFgiR_REeXZ8RKBhPFQLyitVek8kDJ3u1JPaCB1MU`
                },
                data: userEdit
            })
            console.log(res)
            const action: PayloadAction<UserEdit> = editProfileAction(res.data);
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


