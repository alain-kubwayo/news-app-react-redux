import { useDispatch } from "react-redux";
import { filterArticles } from "../../../features/article/articleSlice";

const Search = () => {
    const dispatch = useDispatch();
    const handleChange = e => {
        dispatch(filterArticles(e.target.value.toLowerCase()));
    };
    
    return (
        <input 
            type="search"
            onChange={handleChange}
            className="px-4 py-2 border outline-none border-sky-900"
            placeholder="Search news..."
        />
    );
}
 
export default Search;