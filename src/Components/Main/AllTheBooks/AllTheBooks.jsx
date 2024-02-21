import React, { useEffect } from "react";
import CardBook from "../../Card/SingleBook";
import { useDispatch, useSelector } from "react-redux";
import { allBooks, getBooks } from "../../../Reducer/booksSlice";
import "./AllTheBooks.css"
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
      {books && books.length > 0 ? (
        mapArray(books)
      ) : (
        <div className="notFound-background"> <h4>Book not found </h4>  </div>
      )}
    </div>
  );
};

export default EpicBooks;
