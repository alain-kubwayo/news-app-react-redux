import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPublisherArticles = createAsyncThunk(
  'sources/getPublisherArticles',
  async (name) => {
    return fetch(
      `${process.env.REACT_APP_API_URL}/everything?sources=${name}&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => data.articles);
  }
);

const publisherArticleSlice = createSlice({
  name: 'publisherArticles',
  initialState: {
    publisherArticles:[],
    loading: false,
  },
  extraReducers: {
    [getPublisherArticles.pending]: (state, action) => {
      state.loading = true;
    },

    [getPublisherArticles.fulfilled]: (state, action) => {
        state.loading = false;
        state.publisherArticles = action.payload;
    },

    [getPublisherArticles.rejected]: (state, action) => {
        state.loading = false;
    },
  },
});

export default publisherArticleSlice.reducer;