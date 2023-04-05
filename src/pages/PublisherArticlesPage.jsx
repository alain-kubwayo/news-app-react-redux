import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getArticles,getPublisherArticles } from "../features/article/articleSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const PublisherArticlesPage = () => {
    const dispatch = useDispatch();
    
    const { id } = useParams();
    
    const { articles } = useSelector(state => state.articles);

    console.log(articles);

    // console.log(articles.filter(article => article.source.name === id));

    const publisherArticles = articles.filter(article => article.source.name === id);
    
    // console.log(publisherArticles);

    useEffect(() => {
        dispatch(getArticles());
     }, [dispatch]);
    

    return ( 
        <div className="bg-sky-800">
            {/* { articles.filter(article => article.source.name === id).map(article => ( */}
            { publisherArticles.length === 0 ?<span>No publication found</span> : publisherArticles?.map(article => (
                <div key={id} class="py-4 my-4 bg-red-900">
                    <h2 className="pb-4 border-b-2">{article.title}</h2>
                    <p>{article.description}</p>
                    {/* <p>{article.content}</p> */}
                </div>
            ))}
        </div>
    );
}
 
export default PublisherArticlesPage;