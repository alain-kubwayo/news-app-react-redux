import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../../features/article/articleSlice";
import Heading from "../../common/Heading";
import { PuffLoader } from "react-spinners";

const ArticleList = () => {
    const { articles } = useSelector(state => state.articles);
    return ( 
        <div className="py-10">
            <Heading 
                className="text-lg font-extrabold uppercase sm:text-xl lg:text-2xl text-sky-700" 
                description="Sample Articles"
            />
            <div className="grid w-full grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-4">
                
                { articles && articles.length > 0 ? 
                    articles.slice(0, 10).map(article => (
                        <ArticleCard key={article.title} {...article} />
                    )) : <div>No article to load</div> 
                }
            </div>
        </div>
     );
}
 
export default ArticleList;