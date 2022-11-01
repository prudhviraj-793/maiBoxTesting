import { IconButton } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import React from "react";
import "../CSS/emailBody.css";

function EmailBody(props) {
  return (
    <div className="emailBody">
      <div className="emailBody-left">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <h4>{props.user}</h4>
      </div>
      <div className="emailBody-middle">
        <p>
          <b>{props.subject}</b>{props.body}</p>
      </div>
      <div className="emailBody-right">
        <p>{props.time}</p>
      </div>
    </div>
  );
}

export default EmailBody;
