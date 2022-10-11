import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const statusesSlice = createSlice({
  name: 'statuses',
  initialState,
  reducers: {
    fetchStatuses: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const statusesReducer = statusesSlice.reducer;
export const statusesActions = statusesSlice.actions;
