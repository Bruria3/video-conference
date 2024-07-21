import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice";
import commonReducer from "./common/commonSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    common: commonReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
