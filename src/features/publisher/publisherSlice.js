import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPublishers = createAsyncThunk(
  'sources/getPublishers',
  async () => {
    return fetch(
      `${process.env.REACT_APP_API_URL}/top-headlines/sources?q=keyword&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => data.sources);
  }
);

const publisherSlice = createSlice({
  name: 'publishers',
  initialState: {
    publishers:[],
    loading: false,
  },
  extraReducers: {
    [getPublishers.pending]: (state, action) => {
      state.loading = true;
    },

    [getPublishers.fulfilled]: (state, action) => {
        state.loading = false;
        state.publishers = action.payload;
    },

    [getPublishers.rejected]: (state, action) => {
        state.loading = false;
    },
  },
});

export default publisherSlice.reducer;
