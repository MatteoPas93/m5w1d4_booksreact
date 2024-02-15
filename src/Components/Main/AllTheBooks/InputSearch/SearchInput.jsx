import React, { useState } from "react";
import classes from "./CardStyleInputSearch.module.css";
import { Card } from "react-bootstrap";
import { jsonData } from "../AllTheBooks";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);

  const searchResults = () => {
    const filtered = filterBooks(searchValue);
    if (searchValue.length > 0) {
      setFilteredBooks(filtered);
      setShowNoResults(filtered.length === 0);
    } else {
      setFilteredBooks([]);
      setShowNoResults(false);
    }
    // searchValue.length > 0 ? setFilteredBooks(filtered) : setFilteredBooks([]);
  };

  return (
    <>
      <div className={classes["input-search"]}>
        <input
          type="text"
          placeholder="Search book..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={searchResults}> Search </button>
      </div>
      <div className={classes["container-books"]}>
        {filteredBooks.map((book) => (
          <Card className={classes["card"]} key={book.asin}>
            <img src={book.img} alt="Book" />
            <h4>{book.title}</h4>
          </Card>
        ))}
        {showNoResults && (
          <h5 className={classes["not-found"]}>Book not found</h5>
        )}
      </div>
    </>
  );
};

export default SearchInput;

const filterBooks = (searchBookValue) => {
  return jsonData.filter((book) =>
    book.title.toLowerCase().includes(searchBookValue.toLowerCase())
  );
};
