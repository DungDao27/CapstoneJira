import { configureStore } from "@reduxjs/toolkit";

import userReducder from "./reducers/userReducder";
import adminReducer from './reducers/adminReducer'
import IsLoadingReducer from "./reducers/IsLoadingReducer";
import { quanLyProjectReducer } from "./quanLyProject/slice";

export const store = configureStore({
  reducer: {
    userReducer: userReducder,
    adminReducer : adminReducer,
    quanLyProject: quanLyProjectReducer,    
    IsLoadingReducer: IsLoadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
