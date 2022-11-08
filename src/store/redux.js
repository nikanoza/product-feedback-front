import { configureStore } from '@reduxjs/toolkit';
import {
  categoryReducer,
  feedbacksReducer,
  singleFeedbackReducer,
  statusesReducer,
  usersReducer,
} from './slices';

const store = configureStore({
  reducer: {
    feedbacks: feedbacksReducer,
    statuses: statusesReducer,
    category: categoryReducer,
    users: usersReducer,
    singleFeedback: singleFeedbackReducer,
  },
});

export default store;
