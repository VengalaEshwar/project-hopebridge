import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import orphanageSlice from "./slices/orphanageSlice";
import orphanagesSlice from "./slices/orphanagesSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    user : userSlice,
    orphanage : orphanageSlice,
    orphanages : orphanagesSlice
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
