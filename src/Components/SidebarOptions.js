import React from "react";
import "../CSS/sidebarOptions.css";

function SidebarOptions({ title, number, isActive, status }) {
  return (
    <div className={`sidebarOptions ${isActive && "SidebarOptions-active"}`}>
      <p>{title}</p>{" "}
      <p>
        {number} {status}
      </p>
    </div>
  );
}

export default SidebarOptions;
