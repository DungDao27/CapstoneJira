import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../config/path";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column py-6 px-10 border">
      <div className="d-flex">
        <div>
          <img className="w-10" src="./ico.png" alt="" />
        </div>
        <div className="ml-2">
          <p className="m-0">CyberLearn.vn</p>
          <p>Report bugs</p>
        </div>
      </div>
      <div className="mb-3">
        <p className="m-0">
          <i className="fa-solid fa-clapperboard mr-1"></i> Cyber Board
        </p>
        <NavLink className="text-dark" to={PATH.projectmanagement}>
          <i className="fa-solid fa-gear mr-2"></i>
          Project Management
        </NavLink>
        <br />
        <NavLink className="text-dark" to={PATH.createproject}>
          <i className="fa-solid fa-gear mr-1"></i>
          Craete Project
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
