import { configureStore } from '@reduxjs/toolkit';
import {
  categoryReducer,
  feedbacksReducer,
  statusesReducer,
  usersReducer,
} from './slices';

const store = configureStore({
  reducer: {
    feedbacks: feedbacksReducer,
    statuses: statusesReducer,
    category: categoryReducer,
    users: usersReducer,
  },
});

export default store;
