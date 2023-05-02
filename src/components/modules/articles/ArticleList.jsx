import { useSelector } from "react-redux";
import ArticleCard from "./ArticleCard";
import Heading from "../../common/Heading";
import Search from "./Search";

const ArticleList = () => {
    const { filteredArticles } = useSelector(state => state.articles);
    
    return ( 
        <div className="py-10">
            <div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                    <Heading 
                        className="text-lg font-extrabold uppercase sm:text-xl text-sky-700" 
                        description="Sample Articles"
                    />
                    <Search />
                </div>
            </div>
            <div className="grid w-full grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-4">
                { filteredArticles?.length > 0 ? 
                    filteredArticles.slice(0, 10).map((article, i) => (
                        <ArticleCard key={`filtered-article-${i}`} {...article} />
                    )) : <div>
                            <div>No article to load</div>
                            <div></div>
                            <div></div>
                        </div> 
                }
            </div>
        </div>
     );
};
 
export default ArticleList;