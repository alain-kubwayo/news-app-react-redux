import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../features/article/articleSlice";
import publisherReducer from "../features/publisher/publisherSlice";
import publisherArticleReducer from "../features/publisherArticle/publisherArticleSlice";

export default configureStore({
    reducer: {
        articles: articleReducer,
        publishers: publisherReducer,
        publisherArticles: publisherArticleReducer
    }
});