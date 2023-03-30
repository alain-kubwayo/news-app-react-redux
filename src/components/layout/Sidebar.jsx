import {  useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Heading from "../common/Heading";
import {  getPublishers } from "../../features/article/articleSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
    
    const dispatch = useDispatch();
    const {publishers} = useSelector(state => state.articles);
    const [morePublishers,setMorePublishers]=useState(publishers.slice(0,10))
    // const publishers = articles.map(article => article.source.name);

    useEffect(() => {
       dispatch(getPublishers())
    }, [dispatch]);
const handleMorePublishers =()=>{
    if(morePublishers.length <= 10){
        setMorePublishers(publishers.slice(11,100))
    }else{
        setMorePublishers(publishers.slice(0,10))
    }
    
}

    return ( 
        <div className="py-10">
            <Heading 
                className="text-lg font-semibold uppercase text-sky-700" 
                description="All Publishers"
            />
            <ul className="mt-10">
                { morePublishers.map(({id, name,url}) => { 
                    
                    return <Link to={url}>
                    <li 
                    key={id}
                    className="my-2 border-b cursor-pointer hover:text-sky-800 border-sky-400"
                >{name}</li>
                    </Link>}
                   
                
                )}
                <button type="button" onClick={handleMorePublishers}>Show more</button>
            </ul>
        </div>
     );
}
 
export default Sidebar;