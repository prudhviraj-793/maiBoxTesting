import { createSlice } from "@reduxjs/toolkit";
import { updateMessageStatus } from "../API/api";

const mailSlice = createSlice({
  name: "mails",
  initialState: { mails: [], isMailSent: false, body: "" },
  reducers: {
    replaceMails(state, action) {
      state.mails = action.payload;
    },
    updateMessageStatus(state, action) {
      state.mails = state.mails.map(mail => {
        if(mail.id === action.payload) {
          mail.isMessageRead = true
        }
        return mail
      })
      updateMessageStatus(state.mails)
    },
    sendMail(state, action) {
      state.mails.push({
        id: action.payload.id,
        to: action.payload.to,
        subject: action.payload.subject,
        body: action.payload.body,
        time: action.payload.time,
        isMessageRead: action.payload.isMessageRead
      });
      state.isMailSent = action.payload.isMailSent;
    },
    setBody(state, action) {
      state.body = action.payload;
    },
  },
});

export const mailActions = mailSlice.actions;

export default mailSlice.reducer;
