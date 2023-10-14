import React from "react";
import ReactDOM from "react-dom/client";
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createBrowserHistory, BrowserHistory } from "history";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./App.css";

import Login from "./pages/Login/Login";
import "antd/dist/reset.css";
// import SearchPage from './pages/SearchPage/SearchPage';
import ReTemplate from "./templates/LoginTemplate/ReTemplate";
import { PATH } from "./config/path";
import ProjectManager from "./pages/ProjectManager";
import UserManager from "./pages/UserManager/UserManager"
import MainLayout from "./layout/MainLayout";




const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const history: BrowserHistory | any = createBrowserHistory();

root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<ReTemplate />}>
          <Route index element={<Login />}></Route>
        </Route>
        <Route element={<MainLayout />}>
          <Route
            index
            path={PATH.projectmanagement}
            element={<ProjectManager />}
          ></Route>
          <Route path="admin" element={<UserManager/>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
