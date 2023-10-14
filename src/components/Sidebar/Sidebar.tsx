import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { PATH } from "../../config/path";
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../redux/store'
import { USER_LOGIN } from '../../utility/config'
import { signinAction, UserSignUp } from '../../redux/reducers/userReducder'
import { history } from '../..'
import '../../components/Sidebar/Sidebar.css'
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
    <div className="jira">
  {/* Sider Bar  */}
      <div className="sideBar">
        <div className="sideBar-top">
          <div className="sideBar-icon">
            <i className="fab fa-jira" />
          </div>
          <div className="sideBar-icon" data-toggle="modal" data-target="#searchModal" style={{cursor: 'pointer'}}>
            <i className="fa fa-search" />
            <span className="title">SEARCH ISSUES</span>
          </div>
          <div className="sideBar-icon">
            <i className="fa fa-plus" />
            <span className="title">CREATE ISSUES</span>
          </div>
        </div>
        <div className="sideBar-bottom">
          <div className="sideBar-icon">
            <i className="fa fa-question-circle" />
            <span className="title">ABOUT</span>
          </div>
        </div>
      </div>
  {/* Menu */}
      <div className="menu">
        <div className="account">
          <div className="avatar">
            <img src="/logo-icon.png" alt="" />
          </div>
          <div className="account-info">
            <p><b>Hello</b></p>
            <div className="logout" onClick={logOut}>
            <NavLink className="outbtn" to="/">
              <i className="fas fa-power-off"><p>Log Out</p></i>
            </NavLink>
            </div>
          </div>
        </div>
        <div className="control">
          <div>
          <NavLink className="text-dark" to={PATH.projectmanagement}>
            <i className="fa-solid fa-gear mr-2"></i>Project Management
          </NavLink>
          </div>
          <div>
          <NavLink className="text-dark" to="/admin">
            <i className="fa fa-user mr-2"></i>User Management
          </NavLink>
          </div>
        </div>
        <div className="feature">
          <div>
            <i className="fa fa-truck" />
            <span>Releases</span>
          </div>
          <div>
            <i className="fa fa-equals" />
            <span>Issues and filters</span>
          </div>
          <div>
            <i className="fa fa-paste" />
            <span>Pages</span>
          </div>
          <div>
            <i className="fa fa-location-arrow" />
            <span>Reports</span>
          </div>
          <div>
            <i className="fa fa-box" />
            <span>Components</span>
          </div>
        </div>
      </div>
 
    </div>

  );
};

export default Sidebar;
