import React from "react";
import EmailBody from "./EmailBody";
import EmailMenu from "./EmailMenu";
import "../CSS/emailList.css";
import { useSelector } from "react-redux";

function EmailList() {
  const allMails = useSelector((state) => state.mail.mails);
  return (
    <div className="emailList">
      <EmailMenu />
      {allMails?.map((mail) => (
        <EmailBody
          user={mail?.to}
          subject={mail?.subject}
          body={mail?.body}
          time={mail?.time}
        />
      ))}
    </div>
  );
}

export default EmailList;
