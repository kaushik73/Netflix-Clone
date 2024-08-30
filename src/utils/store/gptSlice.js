import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    searchText: null,
    moviesFromKeyword: null,
  },

  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchResult: (state, action) => {
      state.searchText = action.payload;
    },
    addMoviesFromKeyword: (state, action) => {
      console.log(action.payload, "action.payload ");

      state.moviesFromKeyword = action.payload;
    },
  },
});

export default gptSlice.reducer;
export const { toggleGptSearchView, addSearchResult, addMoviesFromKeyword } =
  gptSlice.actions;
