import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategory: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const categoryReducer = categorySlice.reducer;
export const categoryActions = categorySlice.actions;
