import classes from "./CardStyleInputSearch.module.css";
import {useDispatch } from "react-redux";
import { filterBooks, getBooks } from "../../../../Reducer/booksSlice";


const SearchInput = () => {
    const dispatch = useDispatch()
  const handleInputSearch = (input) => {
      if(input.length > 1) {
        dispatch(filterBooks(input))
      } else {
        dispatch(getBooks())
      }
  }

  return (
    <>
      <div className={classes["input-search"]}>
        <input
          type="text"
          placeholder="Search book..."
          onChange={(e) => handleInputSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchInput;

