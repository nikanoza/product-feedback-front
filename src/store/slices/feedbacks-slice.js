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
    editFeedback: (state, action) => {
      const feedbacks = state.items.slice();
      const feedbackIndex = feedbacks.findIndex(
        (feedback) => feedback.id === action.payload.id
      );
      feedbacks[feedbackIndex].title = action.payload.title;
      feedbacks[feedbackIndex].description = action.payload.description;
      feedbacks[feedbackIndex].category_id = action.payload.category_id;
      feedbacks[feedbackIndex].status_id = action.payload.status_id;

      state.items = feedbacks;
    },
    removeFeedback: (state, action) => {
      const feedbacks = state.items
        .slice()
        .filter((feedback) => feedback.id !== action.payload);
      state.items = feedbacks;
    },
  },
});

export const feedbacksReducer = feedbacksSlice.reducer;
export const feedbacksActions = feedbacksSlice.actions;
