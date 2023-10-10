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

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
