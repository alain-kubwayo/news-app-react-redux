import { Link, useParams } from "react-router-dom";
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
        <div>
            <Link to="/" className="inline-block w-full my-10 text-center text-blue-800 hover:underline">All Articles</Link>
            { publisherArticles.length === 0 ? (
                <div className="max-w-2xl py-4 mx-auto my-4 font-bold text-center text-gray-800 uppercase bg-gray-200 rounded-md">OOPS, No publication found</div>
             ) : (
                publisherArticles?.map(article => (
                    <div key={id} className="max-w-2xl py-4 mx-auto my-4 overflow-hidden rounded-md">
                        <img src={article.urlToImage} alt={article.title} />
                        <h2 className="my-4 font-semibold">{article.title}</h2>
                        <p className="text-lg">{article.content}</p>
                    </div>
                ))
            )
            }
        </div>
    );
};
 
export default PublisherArticlesPage;