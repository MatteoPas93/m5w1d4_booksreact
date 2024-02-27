import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./StylePages/BookDetail.module.css";
import NavigationBar from "../Components/Navbar/Nav";
import Footer from "../Components/Footer/Footer";

const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmNjhlMjA0NTcyZjAwMTk0OTM5NTgiLCJpYXQiOjE3MDgwOTE2MTgsImV4cCI6MTcwOTMwMTIxOH0.4WIOaHC0kc_1yvuly5YFr9w1gAL-ie7rgbByotZWHyg";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [comments, setComments] = useState([]);

  const getBookDetail = async () => {
    try {
      const response = await axios.get(
        `https://striveschool-api.herokuapp.com/books/${id}`,
        {
          headers: {
            Authorization: key,
          },
        }
      );
      const data = await response.data;
      setBook(data);
      getBookComments(data.asin);
    } catch (error) {
      console.error(error);
    }
  };

  const getBookComments = async (asin) => {
    try {
      const resp = await axios.get(
        `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
        {
          headers: {
            Authorization: key,
          },
        }
      );
      const dataComments = await resp.data;
      setComments(dataComments);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBookDetail();
  }, [id]);

  return (
    <>
      <NavigationBar />
      <div className={classes["container"]}>
        <div className={classes["container-book"]}>
          {book && (
            <>
              <h3>{book.title}</h3>
              <img className={classes["imgDetail"]} src={book.img} alt="img" />
              <h6>Category: {book.category}</h6>
              <h6>Price: {book.price}</h6>
            </>
          )}
        </div>
        <div className={classes["allComments-container"]}>
          <h4>Comments:</h4>

          {comments.map((comment) => (
            <div className={classes["singleComment-container"]}>
              <h6> Author: {comment.author} </h6>
              <p> {comment.comment} </p>
              <p> Rate: {comment.rate} </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookDetail;
