import Sidebar from "../components/layout/Sidebar";
import ArticleList from "../components/modules/articles/ArticleList";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../features/article/articleSlice";
import { PuffLoader } from "react-spinners";

const HomePage = () => {
    const { loading } = useSelector(state => state.articles);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getArticles());
    }, [dispatch]);
    if(loading){
        return (
            <div className="flex items-center justify-center w-full h-screen">
                <PuffLoader 
                    color="#164E63"
                    size={300} 
                />
            </div>
        );
    }
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