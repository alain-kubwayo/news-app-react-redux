import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPublisherArticles = createAsyncThunk(
  'sources/getPublisherArticles',
  async (name) => {
    return fetch(
    //   `https://news-proxy.netlify.app/api/top-headlines/sources?q=keyword&apiKey=8fbc5a74b76c47e4bc86206399c15cb6`
      `https://news-proxy.netlify.app/api/everything?sources=${name}&apiKey=22d16d0f1f644991a794a00fd67f742e`
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