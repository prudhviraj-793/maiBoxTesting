import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./mailSlice";
import messageReducer from './messagesSlice'

const store = configureStore({
  reducer: {
    mail: mailReducer,
    message: messageReducer
  },
});

export default store;
