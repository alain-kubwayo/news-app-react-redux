import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPublisherArticles } from "../features/publisherArticle/publisherArticleSlice";
import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { PuffLoader } from "react-spinners";


const PublisherArticlesPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { publisherArticles, loading } = useSelector(state => state.publisherArticles );

    useEffect(() => {
        dispatch(getPublisherArticles(id));
     }, [dispatch]);
    
    return ( 
        <div>
            <Link to="/" className="inline-block w-full my-10 text-center text-blue-800 hover:underline">All Articles</Link>
            {loading && (<div className="flex items-center justify-center w-full h-screen">
                <PuffLoader 
                    color="#164E63"
                    size={300} 
                />
            </div>)
            }
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                {
                    publisherArticles?.map(article => (
                        <div key={`${nanoid()}`} className="max-w-2xl px-3 py-4 mx-auto my-4 mb-4 overflow-hidden border border-gray-700 rounded-md">
                            <img src={article.urlToImage} alt={article.title} />
                            <h2 className="my-4 font-semibold">{article.title}</h2>
                            <p className="text-lg">{article.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
 
export default PublisherArticlesPage;