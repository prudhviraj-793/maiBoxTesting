import React, { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import "../index.css";

function Welcome() {
  return (
    <Fragment>
      {Object.keys(localStorage).length > 0 && (
        <div className="app">
          <Header />
          <div className="app-body">
            <SideBar />
            <Outlet />
          </div>
        </div>
      )}
      {!Object.keys(localStorage).length > 0 && <Navigate to="/login" />}
    </Fragment>
  );
}

export default Welcome;
