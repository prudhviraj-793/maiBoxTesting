import { IconButton } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import React from "react";
import "../CSS/emailBody.css";
import { useDispatch } from "react-redux";
import { messageActions } from "../Store/messagesSlice";
import { useNavigate } from "react-router-dom";
import { mailActions } from "../Store/mailSlice";

function EmailBody(props) {
  const status = props.status;
  const dispatch = useDispatch();
  const navigate = useNavigate()
  function clickHandler() {
    dispatch(mailActions.updateMessageStatus(props.id))
    dispatch(messageActions.setCurrentMessage(props))
    dispatch(messageActions.setUnreadMessages())
    navigate('/message')
  }
  return (
    <div onClick={clickHandler} className="emailBody">
      <div className="emailBody-left">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        {!status && <div className="unRead"></div>}
        <h4>{props.user}</h4>
      </div>
      <div className="emailBody-middle">
        <p>
          <b>{props.subject}</b>
          {props.body}
        </p>
      </div>
      <div className="emailBody-right">
        <p>{props.time}</p>
      </div>
    </div>
  );
}

export default EmailBody;
