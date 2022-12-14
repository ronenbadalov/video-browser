import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter-slice";

export const store = configureStore({
  reducer: { filterState: filterSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
