import React from "react";
import EmailList from "../Components/EmailList";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import '../index.css'


function Welcome() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <SideBar />
        <EmailList />
      </div>
    </div>
  )
}

export default Welcome