import { configureStore } from '@reduxjs/toolkit';
import generalSlice from "./slices/General/generalSlice";

export const store = configureStore({
  reducer: {
    general: generalSlice,
  },
});
