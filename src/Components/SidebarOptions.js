import React from "react";
import "../CSS/sidebarOptions.css";

function SidebarOptions({ title, number, isActive }) {
  return (
    <div className={`sidebarOptions ${isActive && 'SidebarOptions-active'}`}>
      <p>{title}</p>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOptions;
