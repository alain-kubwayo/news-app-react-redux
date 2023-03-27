const ArticleCard = ({ urlToImage, title }) => {
    return ( 
        <div className="border rounded-md border-sky-200 bg-sky-50">
            <div className="h-auto md:h-1/2">
                <img src={urlToImage} alt="Icon" className="w-full h-full overflow-hidden" />
            </div>
            <h2 className="p-4 text-xl font-semibold text-sky-500">{title}</h2>
        </div>
     );
};
 
export default ArticleCard;