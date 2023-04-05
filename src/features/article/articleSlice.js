import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getArticles = createAsyncThunk(
  'articles/getArticles',
  async () => {
    return fetch(
        `https://news-proxy.netlify.app/api/top-headlines?country=us&apiKey=22d16d0f1f644991a794a00fd67f742e`
      )
      .then((res) => res.json())
      .then((data) => data.articles);
  }
);


const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    filteredArticles: [],
    loading: false,
  },
  extraReducers: {
    [getArticles.pending]: (state, action) => {
      state.loading = true;
    },
    [getArticles.fulfilled]: (state, action) => {
      state.loading = false;
      state.articles = action.payload;
      state.filteredArticles = state.articles;
    },
    [getArticles.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    filterArticles: (state, action) => {
      const newsArticles = [...state.articles];
      const filteredNewsArticles = newsArticles.filter(article => article.title.toLowerCase().includes(action.payload));
      state.filteredArticles = filteredNewsArticles;
    }
  }
});

export const { filterArticles } = articleSlice.actions;

export default articleSlice.reducer;
