const ArticleCard = ({ urlToImage, title, url }) => {
    return ( 
        <a href={url} target="__blank" className="border rounded-md border-sky-200 bg-sky-50">
            <div className="">
                <img src={urlToImage} alt="News Cover" className="overflow-hidden" />
            </div>
            <h2 className="p-4 text-xl font-semibold text-sky-500">{title}</h2>
        </a>
     );
};
 
export default ArticleCard;