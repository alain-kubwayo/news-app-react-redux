import ArticleCard from "./ArticleCard";

const ArticleList = () => {
    return ( 
        <div className="grid grid-cols-1 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 sm:gap-4">
            {[0,1,2,3,4,5,6,7,8,9].map((article, i) => <ArticleCard key={i} />)}
        </div>
     );
}
 
export default ArticleList;