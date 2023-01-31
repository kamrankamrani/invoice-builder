import { configureStore } from "@reduxjs/toolkit";
import tableBodySlice from "./features/tableBodySlice";
import tableHeaderSlice from "./features/tableHeaderSlice";

export const store = configureStore({
  reducer: {
    tableHeaderSlice: tableHeaderSlice,
    tableBodySlice: tableBodySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
