import { useSelector } from "react-redux";
import Heading from "../common/Heading";

const Sidebar = () => {
    const { articles } = useSelector(state => state.articles);
    return ( 
        <div className="py-10">
            <Heading 
                className="text-lg font-semibold uppercase text-sky-700" 
                description="All Publishers"
            />
            <ul className="mt-10">
                { articles?.map((article, i) => (
                <li 
                    key={`sidebar-${i}`}
                    className="my-2 border-b cursor-pointer hover:text-sky-800 border-sky-400"
                >{article.source.name}</li>
                ))}
            </ul>
        </div>
     );
}
 
export default Sidebar;