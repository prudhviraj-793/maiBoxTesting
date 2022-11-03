import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "../CSS/sidebar.css";
import SidebarOptions from "./SidebarOptions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function SideBar() {
  const count = useSelector((state) => state.message.unreadMessages);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true)
  function composeHandler(e) {
    e.preventDefault();
    navigate("/compose");
  }
  function inboxHandler() {
    setIsActive(true)
    navigate("/welcome");
  }
  function sentHandler() {
    setIsActive(false)
    navigate("/welcome/sent");
  }
  return (
    <div className="sidebar">
      <Button onClick={composeHandler} className="compose-btn">
        Compose
      </Button>
      <div style={{ cursor: "pointer" }} onClick={inboxHandler}>
        <SidebarOptions title="Inbox" status='unread' isActive={isActive} number={count} />
      </div>
      <SidebarOptions title="Draft" />
      <SidebarOptions title="Spam" />
      <div style={{ cursor: "pointer" }} onClick={sentHandler}>
        <SidebarOptions title="Sent" isActive={!isActive} />
      </div>
    </div>
  );
}

export default SideBar;
