import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mails",
  initialState: { mails: [], isMailSent: false, body: "" },
  reducers: {
    replaceMails(state, action) {
      state.mails = action.payload;
    },
    sendMail(state, action) {
      state.mails.push({
        to: action.payload.to,
        subject: action.payload.subject,
        body: action.payload.body,
        time: action.payload.time,
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
