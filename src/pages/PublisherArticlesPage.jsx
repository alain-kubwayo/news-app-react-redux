import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../features/article/articleSlice";
import { useEffect } from "react";

const PublisherArticlesPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { articles } = useSelector(state => state.articles);
    const publisherArticles = articles.filter(article => article.source.name === id);

    useEffect(() => {
        dispatch(getArticles());
     }, [dispatch]);
    
    return ( 
        <div className="bg-sky-800">
            { publisherArticles.length === 0 ?<span>No publication found</span> : publisherArticles?.map(article => (
                <div key={id} class="py-4 my-4 bg-red-900">
                    <h2 className="pb-4 border-b-2">{article.title}</h2>
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
};
 
export default PublisherArticlesPage;