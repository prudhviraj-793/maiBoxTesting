import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Compose from "./Components/Compose";
import Welcome from "./Pages/Welcome";
import { getMails, storeMail } from "./Store/actions";
import Message from "./Pages/Message.js";
import Sent from "./Pages/Sent";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import EmailList from "./Components/EmailList";

let isInitial = true;

function App() {
  const allMails = useSelector((state) => state.mail.mails);
  const isMailSent = useSelector((state) => state.mail.isMailSent);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMails());
  }, [dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (isMailSent) {
      dispatch(storeMail(allMails));
    }
  }, [allMails, dispatch, isMailSent]);
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Welcome />}>
        <Route index element={<EmailList />} />
        <Route path="sent" element={<Sent />} />
      </Route>
      <Route path="/compose" element={<Compose />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  );
}

export default App;
