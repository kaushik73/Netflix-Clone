import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    darkTheme: false,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
    changeDarkTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
  },
});

export default configSlice.reducer;
export const { changeLanguage, changeDarkTheme } = configSlice.actions;
