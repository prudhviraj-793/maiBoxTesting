import React from "react";
import { Button } from "@material-ui/core";
import "../CSS/sidebar.css";
import SidebarOptions from "./SidebarOptions";
import {useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";

function SideBar() {
  const count = useSelector(state => state.message.unreadMessages)
  const navigate = useNavigate()
  function composeHandler(e) {
    e.preventDefault()
    navigate('/compose')
  }
  return (
    <div className="sidebar">
      <Button onClick={composeHandler} className="compose-btn">Compose</Button>
      <SidebarOptions title="Inbox" isActive={true} number={count} />
      <SidebarOptions title="Sent" />
      <SidebarOptions title="Draft" />
      <SidebarOptions title="Unread" />
    </div>
  );
}

export default SideBar;
