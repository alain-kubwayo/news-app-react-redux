import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "8fbc5a74b76c47e4bc86206399c15cb6";

export const getArticles = createAsyncThunk("articles/getArticles", async () => {
    return fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-02-27&sortBy=publishedAt&apiKey=${API_KEY}`)
        .then(res => res.json())
        .then(data => data.articles);
});

const articleSlice = createSlice({
    name: "articles",
    initialState: {
        articles: [],
        loading: false
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
        }
    }
});

export default articleSlice.reducer;