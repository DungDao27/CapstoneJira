import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { PATH } from "../config/path";
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../redux/store'
import { USER_LOGIN } from '../utility/config'
import { signinAction, UserSignUp } from '../redux/reducers/userReducder'
import { history } from '..'
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
    // <div className="d-flex flex-column py-6 px-10 border">
    //   <div className="d-flex">
    //     <div>
    //       <img className="w-10" src="./ico.png" alt="" />
    //     </div>
    //     <div className="ml-2">
    //       <p className="m-0">CyberLearn.vn</p>
    //       <p>Report bugs</p>
    //     </div>
    //   </div>
    //   <div className="mb-3">
    //     <p className="m-0">
    //       <i className="fa-solid fa-clapperboard mr-1"></i> Cyber Board
    //     </p>
    //     <NavLink className="text-dark" to={PATH.projectmanagement}>
    //       <i className="fa-solid fa-gear mr-2"></i>
    //       Project Management
    //     </NavLink>
    //     <br />
    //     <p className="text-dark">
    //       <i className="fa-solid fa-gear mr-1"></i>
    //       Craete Project
    //     </p>
    //   </div>
    //   <span className="h-[1px] w-[110%] bg-dark"></span>
    //   <div className="mt-4">
    //     <p className="m-0">
    //       <i className="fa-solid fa-truck"></i> Releases
    //     </p>
    //     <p className="text-dark m-0">
    //       <i className="fa-solid fa-grip-lines mr-2"></i>
    //       Issues and filters
    //     </p>
    //     <p className="m-0">
    //       <i className="fa-solid fa-file-lines mr-1"></i> Pages
    //     </p>
    //     <p className="m-0">
    //       <i className="fa-solid fa-paper-plane"></i> Report
    //     </p>
    //     <p className="m-0">
    //       <i className="fa-brands fa-elementor"></i> Components
    //     </p>
    //   </div>
    // </div>
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
        <i className="fa fa-credit-card" />
        <span>Cyber Board</span>
      </div>
      <div>
        <i className="fa fa-cog" />
        <span>Project Settings</span>
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
  {/* {/* {/* Main Board * /} * /} */}
  {/* <div className="main">
    <div className="header">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb" style={{backgroundColor: 'white'}}>
          <li className="breadcrumb-item">Project</li>
          <li className="breadcrumb-item">CyberLearn</li>
          <li className="breadcrumb-item active" aria-current="page">
            Cyber Board
          </li>
        </ol>
      </nav>
    </div>
    <h3>Cyber Board</h3>
    <div className="info" style={{display: 'flex'}}>
      <div className="search-block">
        <input className="search" />
        <i className="fa fa-search" />
      </div>
      <div className="avatar-group" style={{display: 'flex'}}>
        <div className="avatar">
          <img src="./assets/img/download (1).jfif" alt="" />
        </div>
        <div className="avatar">
          <img src="./assets/img/download (2).jfif" alt="" />
        </div>
        <div className="avatar">
          <img src="./assets/img/download (3).jfif" alt="" />
        </div>
      </div>
      <div style={{marginLeft: 20}} className="text">Only My Issues</div>
      <div style={{marginLeft: 20}} className="text">Recently Updated</div>
    </div>
    <div className="content" style={{display: 'flex'}}>
      <div className="card" style={{width: '17rem', height: '25rem'}}>
        <div className="card-header">
          BACKLOG 3
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" data-toggle="modal" data-target="#infoModal" style={{cursor: 'pointer'}}>
            <p>
              Each issue has a single reporter but can have multiple
              assignees
            </p>
            <div className="block" style={{display: 'flex'}}>
              <div className="block-left">
                <i className="fa fa-bookmark" />
                <i className="fa fa-arrow-up" />
              </div>
              <div className="block-right">
                <div className="avatar-group" style={{display: 'flex'}}>
                  <div className="avatar">
                    <img src="./assets/img/download (1).jfif" alt="" />
                  </div>
                  <div className="avatar">
                    <img src="./assets/img/download (2).jfif" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <p>
              Each issue has a single reporter but can have multiple
              assignees
            </p>
            <div className="block" style={{display: 'flex'}}>
              <div className="block-left">
                <i className="fa fa-check-square" />
                <i className="fa fa-arrow-up" />
              </div>
              <div className="block-right">
                <div className="avatar-group" style={{display: 'flex'}}>
                  <div className="avatar">
                    <img src="./assets/img/download (1).jfif" alt="" />
                  </div>
                  <div className="avatar">
                    <img src="./assets/img/download (2).jfif" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
      <div className="card" style={{width: '17rem', height: '25rem'}}>
        <div className="card-header">
          SELECTED FOR DEVELOPMENT 2
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
        </ul>
      </div>
      <div className="card" style={{width: '17rem', height: '25rem'}}>
        <div className="card-header">
          IN PROGRESS 2
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
        </ul>
      </div>
      <div className="card" style={{width: '17rem', height: '25rem'}}>
        <div className="card-header">
          DONE 3
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  </div> */}
    </div>

  );
};

export default Sidebar;
