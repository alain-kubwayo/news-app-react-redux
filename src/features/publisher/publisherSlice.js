import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPublishers = createAsyncThunk(
  'sources/getPublishers',
  async () => {
    return fetch(
      `https://news-proxy.netlify.app/api/top-headlines/sources?q=keyword&apiKey=8fbc5a74b76c47e4bc86206399c15cb6`
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
