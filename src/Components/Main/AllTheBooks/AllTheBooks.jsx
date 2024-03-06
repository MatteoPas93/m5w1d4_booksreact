import React, { useEffect, useState } from "react";
import CardBook from "../../Card/SingleBook";
import { useDispatch, useSelector } from "react-redux";
import { allBooks, getBooks } from "../../../Reducer/booksSlice";
import "./AllTheBooks.css";
import { Spinner } from "react-bootstrap";

const EpicBooks = ({ onBookClick }) => {
  const [loading, setLoading] = useState(true);
  const books = useSelector(allBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [dispatch]);

  const mapArray = (array) => {
    return array.map((book) => (
      <CardBook
        data-testid= "card"
        title={book.title}
        img={book.img}
        category={book.category}
        price={book.price}
        key={book.asin}
        asin={book.asin}
        onClick={() => onBookClick(book.asin)}
      />
    ));
  };

  return (
    <div className="d-flex col-lg-8 flex-wrap justify-content-evenly gap-3">
      {loading ? (
        <Spinner
          animation="border"
          role="status"
          variant="danger"
          style={{ width: "200px", height: "200px" }}
          className="spinner"
        >
          <span className="sr-only"></span>
        </Spinner>
      ) : books && books.length > 0 ? (
        mapArray(books)
      ) : (
        <div className="notFound-background">
          {" "}
          <h4>Book not found </h4>{" "}
        </div>
      )}
    </div>
  );
};

export default EpicBooks;
