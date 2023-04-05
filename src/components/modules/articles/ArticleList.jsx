import { useSelector } from "react-redux";
import ArticleCard from "./ArticleCard";
import Heading from "../../common/Heading";
import Search from "./Search";
import { nanoid } from "@reduxjs/toolkit";

const ArticleList = () => {
    const { filteredArticles } = useSelector(state => state.articles);
    
    return ( 
        <div className="py-10">
            <div className="flex flex-col sm:flex-row sm:justify-between">
                <Heading 
                    className="text-lg font-extrabold uppercase sm:text-xl text-sky-700" 
                    description="Sample Articles"
                />
                <Search />
            </div>
            <div className="grid w-full grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-4">
                
                { filteredArticles && filteredArticles.length > 0 ? 
                    filteredArticles.slice(0, 10).map((article, i) => (
                        <ArticleCard key={`${nanoid()}`} {...article} />
                    )) : <div>No article to load</div> 
                }
            </div>
        </div>
     );
};
 
export default ArticleList;