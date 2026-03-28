import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../reduxSlice/messageSlice";

export const store = configureStore({
  reducer: {
    messages: messageReducer,
  },
});
