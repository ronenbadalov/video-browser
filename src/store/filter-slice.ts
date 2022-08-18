import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FilterState = {
  genreIDArr: number[];
  year: string;
  searchQuery: string;
};

const initialState: FilterState = {
  genreIDArr: [],
  year: "",
  searchQuery: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setGenreIDArr(state, action: PayloadAction<number[]>) {
      state.genreIDArr = [...action.payload];
    },
    setYear(state, action: PayloadAction<string>) {
      state.year = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
