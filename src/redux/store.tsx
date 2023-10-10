import { configureStore } from "@reduxjs/toolkit";

import userReducder from "./reducers/userReducder";

import IsLoadingReducer from "./reducers/IsLoadingReducer";
import { quanLyProjectReducer } from "./quanLyProject/slice";

export const store = configureStore({
  reducer: {
    userReducer: userReducder,
    IsLoadingReducer: IsLoadingReducer,
    quanLyProject: quanLyProjectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
