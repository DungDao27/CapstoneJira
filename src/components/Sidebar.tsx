import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { PATH } from "../config/path";
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../redux/store'
import { USER_LOGIN } from '../utility/config'
import { signinAction, UserSignUp } from '../redux/reducers/userReducer'
import {User, getUserListAction, getUserListApi} from '../redux/reducers/adminReducer'
import { history } from '..'
import { userInfo } from 'os';
const Sidebar = () => {

  const [formValues, setFormValues] = useState<UserSignUp>({
    email: '',
    password: '',
    name: '',
    phoneNumber:''
  });

  const dispatch: DispatchType = useDispatch();
  const logOut = () => {
    localStorage.removeItem(USER_LOGIN);
    const action = signinAction({});
    dispatch(action);
    history.push('/');
  }
  return (
    <div className="d-flex flex-column py-6 px-10 border">
      <div className="d-flex">
        <div>
          <img className="w-10" src="./ico.png" alt="" />
        </div>
        <div className="ml-2">
          <p className="m-0">Hello </p>
          <div className="d-flex" onClick={logOut}>
          <NavLink className="text-dark" to="/">
            <p>Log Out</p>
          </NavLink>
        </div>
        </div>
      </div>
      <div className="mb-3">
        <NavLink className="text-dark" to={PATH.projectmanagement}>
          <i className="fa-solid fa-gear mr-2"></i>
          Project Management
        </NavLink>
        <br />
        <NavLink className="text-dark" to={PATH.createproject}>
          <i className="fa-solid fa-gear mr-1"></i>
          Craete Project
        </NavLink>
        <br />
        <NavLink className="text-dark" to={PATH.createtask}>
          <i className="fa-solid fa-gear mr-1"></i>
          Craete Task
        </NavLink>
        <br />
        <NavLink className="text-dark" to="/admin">
          <i className="fa fa-user mr-1"></i>
          User Management
        </NavLink>
      </div>
      <span className="h-[1px] w-[110%] bg-dark"></span>
      <div className="mt-4">
        <p className="m-0">
          <i className="fa-solid fa-truck"></i> Releases
        </p>
        <p className="text-dark m-0">
          <i className="fa-solid fa-grip-lines mr-2"></i>
          Issues and filters
        </p>
        <p className="m-0">
          <i className="fa-solid fa-file-lines mr-1"></i> Pages
        </p>
        <p className="m-0">
          <i className="fa-solid fa-paper-plane"></i> Report
        </p>
        <p className="m-0">
          <i className="fa-brands fa-elementor"></i> Components
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
