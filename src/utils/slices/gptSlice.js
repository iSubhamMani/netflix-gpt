import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    showLoader: false,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    toggleLoader: (state, action) => {
      state.showLoader = action.payload;
    },
  },
});

export const { toggleGptSearch, addGptMovieResult, toggleLoader } =
  gptSlice.actions;
export default gptSlice.reducer;
