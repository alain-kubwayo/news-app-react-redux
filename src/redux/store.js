import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../features/article/articleSlice";

export default configureStore({
    reducer: {
        articles: articleReducer
    }
});