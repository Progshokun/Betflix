import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countriesId: '',
  genreId: '',
  order: 'NUM_VOTE',
  type: '',
  year: '',
  page: 1,
};

export const currentQuerySlice = createSlice({
  name: 'currentQuery',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = currentQuerySlice.actions;

export default currentQuerySlice.reducer;
