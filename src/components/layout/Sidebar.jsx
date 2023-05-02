import {  useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Heading from "../common/Heading";
import {  getPublishers } from "../../features/publisher/publisherSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const dispatch = useDispatch();
    const { publishers } = useSelector(state => state.publishers);
    const [morePublishers,setMorePublishers]=useState(publishers.slice(0,10));
    const [showMore, setShowMore] = useState(true);

    useEffect(() => {
       dispatch(getPublishers());
    }, [dispatch]);

    useEffect(() => {
        setMorePublishers(publishers.slice(0, 10));
     }, [publishers]);

    
    const handleMorePublishers =()=>{
        if(morePublishers.length <= 10){
            setShowMore(false);
            setMorePublishers(publishers.slice(11,100));
        }else{
            setShowMore(true);
            setMorePublishers(publishers.slice(0,10));
        } 
    };

    return ( 
        <div className="py-10">
            <Heading 
                className="text-lg font-semibold uppercase text-sky-700" 
                description="All Publishers"
            />
            <ul className="mt-10">
                { morePublishers.map(({id, name}) => ( 
                    <Link key={id} to={`/publisher-articles/${id}`}>
                        <li 
                            key={id}
                            className="my-2 border-b cursor-pointer hover:text-sky-800 border-sky-400"
                        >{name}</li>
                    </Link>
                ))}
                <button 
                    type="button" 
                    onClick={handleMorePublishers}
                    className="px-2 py-1 text-gray-100 rounded-md bg-sky-900"
                >{showMore ? 'Show more' : 'Show less'}</button>
            </ul>
        </div>
     );
};
 
export default Sidebar;