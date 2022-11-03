import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import TextEditor from "../Components/TextEditor";
import { mailActions } from "../Store/mailSlice";
import { messageActions } from "../Store/messagesSlice";

function Compose() {
  const toRef = useRef();
  const subjectRef = useRef();
  const body = useSelector((state) => state.mail.body);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function sendMailHandler(e) {
    e.preventDefault();
    const enteredTo = toRef.current.value;
    const enteredSubject = subjectRef.current.value;
    const date = new Date();
    const hrs = date.getHours();
    const mins = date.getMinutes();
    const mail = {
      id: Math.random().toString(),
      to: enteredTo,
      subject: enteredSubject,
      body,
      time: `${hrs}:${mins}`,
      isMailSent: true,
      isMessageRead: false,
    };
    dispatch(mailActions.sendMail(mail));
    dispatch(messageActions.setUnreadMessages("increase"));
    navigate("/welcome");
  }
  return (
    <Fragment>
      {Object.keys(localStorage).length > 0 && (
        <form onSubmit={sendMailHandler}>
          <div>
            <label>To</label>
            <input type="email" ref={toRef} required />
          </div>
          <div>
            <label>Subject</label>
            <input type="text" ref={subjectRef} required />
          </div>
          <div>
            <TextEditor />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      )}
      {!Object.keys(localStorage).length > 0 && <Navigate to="/login" />}
    </Fragment>
  );
}

export default Compose;
