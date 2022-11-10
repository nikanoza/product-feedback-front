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
    addComment: (state, action) => {
      const clone = state.feedback;
      clone.comments.push(action.payload);
      clone.commentAmount = clone.commentAmount + 1;
      state.feedback = clone;
    },
    addReplay: (state, action) => {
      const clone = state.feedback;
      const commentIndex = clone.comments.findIndex(
        (comment) => comment.id === action.payload.commentId
      );
      clone.comments[commentIndex].replies.push(action.payload);
      clone.commentAmount = clone.commentAmount + 1;
      state.feedback = clone;
    },
  },
});

export const singleFeedbackReducer = singleFeedbackSlice.reducer;
export const singleFeedbackActions = singleFeedbackSlice.actions;
