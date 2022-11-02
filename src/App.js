import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Compose from "./Components/Compose";
import Welcome from "./Pages/Welcome";
import { getMails, storeMail } from "./Store/actions";
import Message from './Pages/Message.js'

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
      <Route path="/" element={<Welcome />} />
      <Route path="/compose" element={<Compose />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  );
}

export default App;
