import ArticleList from "../components/modules/articles/ArticleList";

const HomePage = () => {
    return ( 
        <div>
            <div className="inline-block">
                <h1 className="text-2xl font-extrabold uppercase sm:text-3xl lg:text-4xl text-sky-700">All Articles</h1>
                <div className="w-1/2 h-2 bg-sky-800"></div>
            </div>
            <ArticleList />
        </div>
     );
}
 
export default HomePage;