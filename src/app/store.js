import { configureStore } from '@reduxjs/toolkit';
import x from "../todoReducer";

export const store = configureStore({
  reducer: {
    todo: x
  },
});
