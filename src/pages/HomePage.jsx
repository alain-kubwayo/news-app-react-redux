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
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-10">
                <div className="sm:col-span-1">
                    <Sidebar />
                </div>
                <div className="sm:col-span-3">
                    <ArticleList />
                </div>
            </div>
        </div>
     );
};
 
export default HomePage;