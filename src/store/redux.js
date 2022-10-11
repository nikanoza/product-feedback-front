import { configureStore } from '@reduxjs/toolkit';
import { feedbacksReducer, statusesReducer } from './slices';

const store = configureStore({
  reducer: {
    feedbacks: feedbacksReducer,
    statuses: statusesReducer,
  },
});

export default store;
