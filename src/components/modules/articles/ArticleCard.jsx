const ArticleCard = () => {
    return ( 
        <div className="border rounded-md border-sky-200 bg-sky-50">
            <div>
                <img src="/favicon.ico" alt="Icon" className="w-full h-full overflow-hidden" />
            </div>
            <h2 className="p-4 text-xl font-semibold text-sky-500">Article Title</h2>
        </div>
     );
};
 
export default ArticleCard;