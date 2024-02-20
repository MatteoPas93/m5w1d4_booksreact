import React, { useEffect } from "react";
import CardBook from "../../Card/SingleBook";
import { useDispatch, useSelector } from "react-redux";
import { allBooks, getBooks } from "../../../Reducer/booksSlice";

const EpicBooks = () => {
  const books = useSelector(allBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const mapArray = (array) => {
    return array.map((book) => (
      <CardBook
        title={book.title}
        img={book.img}
        category={book.category}
        price={book.price}
        key={book.asin}
        asin={book.asin}
      />
    ));
  };

  return (
    <div className="d-flex flex-wrap justify-content-evenly gap-3">
      {books && mapArray(books)}
    </div>
  );
};

export default EpicBooks;
