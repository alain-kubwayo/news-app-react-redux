import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../../features/article/articleSlice";

const ArticleList = () => {
    const dispatch = useDispatch();
    const { articles, loading } = useSelector(state => state.articles);
    useEffect(() => {
        dispatch(getArticles());
    }, []);
    
    if(loading){
        return <div>Loading...</div>;
    }
    return ( 
        <div className="grid w-full grid-cols-1 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 sm:gap-4">
            {/* {source, author, title, description, url, urlToImage, publishedAt, content} */}
            { articles.length > 0 ? 
                articles.map(article => (
                    <ArticleCard key={article.publishedAt} {...article} />
                )) : <div>No article to load</div> 
            }
        </div>
     );
}
 
export default ArticleList;