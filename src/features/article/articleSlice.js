import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = '8fbc5a74b76c47e4bc86206399c15cb6';

// const publishersEndpoint = `https://news-proxy.netlify.app/api/everything?q=keyword&apiKey=8fbc5a74b76c47e4bc86206399c15cb6`;

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

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    publishers:[],
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

    [getPublishers.fulfilled]: (state, action) => {
      state.publishers = action.payload;
    },
  },
  reducers: {
    getPublisherArticles: (state, action) => {
        const filteredArticles = state.articles.filter((article) => article.source.name === action.payload);
        // console.log(filteredArticles);
        return filteredArticles;
    },
  },
});

export const { getPublisherArticles } = articleSlice.actions;

export default articleSlice.reducer;
