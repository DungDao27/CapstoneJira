import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom/dist";

const MainLayout = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
