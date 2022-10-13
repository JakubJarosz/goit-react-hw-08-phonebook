import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { contactsReducer } from "./tasks/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts : contactsReducer,
  },
});