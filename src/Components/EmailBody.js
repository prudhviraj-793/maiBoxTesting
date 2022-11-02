import { IconButton } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import React, { Fragment } from "react";
import "../CSS/emailBody.css";
import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "../Store/messagesSlice";
import { useNavigate } from "react-router-dom";
import { mailActions } from "../Store/mailSlice";
import DeleteIcon from "@material-ui/icons/Delete";
import { updateMessageStatus } from "../API/api";

function EmailBody(props) {
  const status = props.status;
  const mails = useSelector(state => state.mail.mails)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function clickHandler() {
    dispatch(mailActions.updateMessageStatus(props.id));
    dispatch(messageActions.setCurrentMessage(props));
    dispatch(messageActions.setUnreadMessages());
    navigate("/message");
  }
  async function deleteHandler(id) {
    const newMails = [...mails]
    newMails.forEach((mail,idx) => {
      if(mail.id === id) {
        newMails.splice(idx, 1)
      }
      return mail
    })
    await updateMessageStatus(newMails)
    dispatch(mailActions.replaceMails(newMails))
  }
  return (
    <Fragment>
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
      <div className="delete">
        <IconButton onClick={() => deleteHandler(props.id)} >
          <DeleteIcon />
        </IconButton>
      </div>
    </Fragment>
  );
}

export default EmailBody;
