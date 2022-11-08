import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {
    fetchFeedback: (state, action) => {
      state.items = action.payload;
    },
    addFeedback: (state, action) => {
      const feedbacks = state.items.slice();
      feedbacks.push(action.payload);
      state.items = feedbacks;
    },
  },
});

export const feedbacksReducer = feedbacksSlice.reducer;
export const feedbacksActions = feedbacksSlice.actions;
