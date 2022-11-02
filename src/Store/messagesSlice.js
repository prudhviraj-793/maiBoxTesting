import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "message",
  initialState: { currentMessage: {}, unreadMessages: 0 },
  reducers: {
    setCurrentMessage(state, action) {
      state.currentMessage = { ...action.payload };
    },
    setUnreadMessages(state, action) {
      if (action.payload === "increase") {
        state.unreadMessages++;
      } else {
        if (state.unreadMessages !== 0) {
          state.unreadMessages--;
        }
      }
    },
  },
});

export const messageActions = messagesSlice.actions;

export default messagesSlice.reducer;
