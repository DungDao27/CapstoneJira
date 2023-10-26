import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';

import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import Loading from './Components/Loading/Loading';
import { store } from './Redux/configStore';
import LoginTemplate from './Templates/LoginTemplate';
import Login2 from './Pages/Login/Login2';
import ProjectTemplate from './Templates/ProjectTemplate';
import ProjectManagement from './Pages/ProjectManagement/ProjectManagement';
import CreateProject from './Pages/CreateProject/CreateProject';
import EditProjectDrawer from './Components/Drawer/EditProjectDrawer';
import UserManagement from './Pages/UserManagement/UserManagement';
import EditUser from './Components/Modal/EditUser';
import Login from './Pages/Login/Login';
export const history: any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Loading></Loading>
    <EditProjectDrawer/>
    <EditUser/>
    <HistoryRouter history={history}>
      <Routes>
        <Route>
          <Route path='' element={<LoginTemplate/>}>
            <Route index element={<Login2/>}></Route>
            <Route path='/login' element={<Login2/>}></Route>
          </Route>
          <Route path='/project' element={<ProjectTemplate/>}>
            <Route index element={<ProjectManagement/>}></Route>
          </Route>
          <Route path='/createproject' element={<CreateProject/>}></Route>
          <Route path='/usermanagement' element={<UserManagement/>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
