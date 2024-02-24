import classes from "./CardStyleInputSearch.module.css";
import { useDispatch } from "react-redux";
import { filterBooks, getBooks } from "../../../../Reducer/booksSlice";

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleInputSearch = (inputValue) => {
    if (inputValue.length > 1) {
      dispatch(filterBooks(inputValue));
    } else {
      dispatch(getBooks());
    }
  };

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
