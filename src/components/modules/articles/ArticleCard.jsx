const ArticleCard = ({ urlToImage, title }) => {
    return ( 
        <div className="border rounded-md border-sky-200 bg-sky-50">
            <div className="">
                <img src={urlToImage} alt="News Cover" className="overflow-hidden" />
            </div>
            <h2 className="p-4 text-xl font-semibold text-sky-500">{title}</h2>
        </div>
     );
};
 
export default ArticleCard;