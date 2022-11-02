import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextEditor from "../Components/TextEditor";
import { mailActions } from "../Store/mailSlice";
import { messageActions } from "../Store/messagesSlice";

function Compose() {
  const toRef = useRef();
  const subjectRef = useRef();
  const body = useSelector((state) => state.mail.body);
  const dispatch = useDispatch();

  function sendMailHandler(e) {
    e.preventDefault();
    const enteredTo = toRef.current.value;
    const enteredSubject = subjectRef.current.value;
    const date = new Date()
    const hrs = date.getHours()
    const mins = date.getMinutes()
    const mail = {
      id: Math.random().toString(),
      to: enteredTo,
      subject: enteredSubject,
      body,
      time: `${hrs}:${mins}`,
      isMailSent: true,
      isMessageRead: false
    };
    dispatch(mailActions.sendMail(mail));
    dispatch(messageActions.setUnreadMessages('increase'))
  }
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default Compose;
