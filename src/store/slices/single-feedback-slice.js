import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  feedback: {
    category_id: 0,
    commentAmount: 0,
    comments: [],
    description: '',
    id: 0,
    status_id: 0,
    title: '',
  },
};

const singleFeedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    fetchFeedback: (state, action) => {
      state.feedback = action.payload;
    },
  },
});

export const singleFeedbackReducer = singleFeedbackSlice.reducer;
export const singleFeedbackActions = singleFeedbackSlice.actions;
