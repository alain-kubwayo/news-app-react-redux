import Heading from "../components/common/Heading";
import Sidebar from "../components/layout/Sidebar";
import ArticleList from "../components/modules/articles/ArticleList";

const HomePage = () => {
    return ( 
        <div>
            <div className="flex flex-col items-start sm:flex-row sm:gap-x-10">
                <Sidebar />
                <ArticleList />
            </div>
        </div>
     );
}
 
export default HomePage;