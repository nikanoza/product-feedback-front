import { configureStore } from '@reduxjs/toolkit';
import { categoryReducer, feedbacksReducer, statusesReducer } from './slices';

const store = configureStore({
  reducer: {
    feedbacks: feedbacksReducer,
    statuses: statusesReducer,
    category: categoryReducer,
  },
});

export default store;
