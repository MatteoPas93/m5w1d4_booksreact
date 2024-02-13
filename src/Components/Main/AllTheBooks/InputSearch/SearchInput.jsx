import React, { useState } from "react";
import classes from "./CardStyleInputSearch.module.css";
import { Card } from "react-bootstrap";
import { jsonData } from "../AllTheBooks";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const searchResults = () => {
    const filtered = filterBooks(searchValue);
    searchValue.length > 0 ? setFilteredBooks(filtered) : setFilteredBooks([]);
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
