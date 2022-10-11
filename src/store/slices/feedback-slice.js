import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {},
});

export const feedbacksReducer = feedbacksSlice.reducer;
export const feedbacksActions = feedbacksSlice.actions;
