import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Message() {
  const message = useSelector((state) => state.message.currentMessage);
  return (
    <Fragment>
      {Object.keys(localStorage).length > 0 && (
        <Fragment>
          <div>{message.subject}</div>
          <div>
            <p>To: {message.user}</p>
          </div>
          <div>{message.body}</div>
        </Fragment>
      )}
      {!Object.keys(localStorage).length > 0 && <Navigate to="/login" />}
    </Fragment>
  );
}

export default Message;
