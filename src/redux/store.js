import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../features/article/articleSlice";
import publisherReducer from "../features/publisher/publisherSlice";

export default configureStore({
    reducer: {
        articles: articleReducer,
        publishers: publisherReducer
    }
});