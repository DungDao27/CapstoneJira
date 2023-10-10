<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./reducers/courseReducer";
import userReducder from "./reducers/userReducder";
import adminReducer from "./reducers/adminReducer";
import IsLoadingReducer from "./reducers/IsLoadingReducer";
import { quanLyProjectReducer } from "./quanLyProject/slice";

export const store = configureStore({
  reducer: {
    courseReducer: courseReducer,
    userReducer: userReducder,
    adminReducer: adminReducer,
    IsLoadingReducer: IsLoadingReducer,
    quanLyProject: quanLyProjectReducer,
  },
});
=======
import {configureStore} from '@reduxjs/toolkit'

import userReducder from './reducers/userReducder'

import IsLoadingReducer from './reducers/IsLoadingReducer'

export const store = configureStore({
    reducer : {
       userReducer : userReducder,
       IsLoadingReducer : IsLoadingReducer
    }
})
>>>>>>> d416655fdb45666f3d0f97c530d765d496844d54

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
