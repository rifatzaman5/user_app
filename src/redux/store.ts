// =============================================
// 🏪 REDUX STORE
// =============================================

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import postReducer from "./postSlice";

// Store banao
export const store = configureStore({
  reducer: {
    users: userReducer,
    posts: postReducer,
  },
});

// Types export karo
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;