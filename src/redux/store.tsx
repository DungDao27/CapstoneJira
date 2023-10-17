import { configureStore } from "@reduxjs/toolkit";

import userReducder from "./reducers/userReducer";

import IsLoadingReducer from "./reducers/IsLoadingReducer";
import { quanLyProjectReducer } from "./quanLyProject/slice";
import adminReducer from "./reducers/adminReducer";

export const store = configureStore({
  reducer: {
    userReducer: userReducder,
    IsLoadingReducer: IsLoadingReducer,
    quanLyProject: quanLyProjectReducer,
    adminReducer: adminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
