import Heading from "../components/common/Heading";
import Sidebar from "../components/layout/Sidebar";
import ArticleList from "../components/modules/articles/ArticleList";

const HomePage = () => {
    return ( 
        <div>
            <Heading 
                className="text-2xl font-extrabold uppercase sm:text-3xl lg:text-4xl text-sky-700" 
                description="All Articles"
            />
            <div className="flex flex-col sm:flex-row sm:gap-x-10">
                <Sidebar />
                <ArticleList />
            </div>
        </div>
     );
}
 
export default HomePage;