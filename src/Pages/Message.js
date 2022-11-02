import React, { Fragment } from "react";
import { useSelector } from "react-redux";

function Message() {
  const message = useSelector((state) => state.message.currentMessage);
  return (
    <Fragment>
      <div>{message.subject}</div>
      <div>
        <p>To: {message.user}</p>
      </div>
      <div>{message.body}</div>
    </Fragment>
  );
}

export default Message;
