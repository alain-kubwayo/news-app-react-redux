import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getArticles = createAsyncThunk(
  'articles/getArticles',
  async () => {
    return fetch(
        `https://news-proxy.netlify.app/api/top-headlines?country=us&apiKey=8fbc5a74b76c47e4bc86206399c15cb6`
      )
      .then((res) => res.json())
      .then((data) => data.articles);
  }
);


const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    loading: false,
  },
  extraReducers: {
    [getArticles.pending]: (state, action) => {
      state.loading = true;
    },
    [getArticles.fulfilled]: (state, action) => {
      state.loading = false;
      state.articles = action.payload;
    },
    [getArticles.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default articleSlice.reducer;
