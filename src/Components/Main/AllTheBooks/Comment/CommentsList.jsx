import { useState, useEffect } from "react";
import SingleComment from "./SingleComment";
import { useSelector } from "react-redux";
import { isRendering } from "../../../../Reducer/booksSlice";

const CommentList = ({ asin }) => {
  const [data, setData] = useState([]);
  const rendering = useSelector(isRendering)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmNjhlMjA0NTcyZjAwMTk0OTM5NTgiLCJpYXQiOjE3MDgwOTE2MTgsImV4cCI6MTcwOTMwMTIxOH0.4WIOaHC0kc_1yvuly5YFr9w1gAL-ie7rgbByotZWHyg",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Error");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComments();
  }, [asin, rendering]);

  return (
    <div>
      {data &&
        data.map((comment) => (
          <SingleComment
            key={comment._id}
            author={comment.author}
            comment={comment.comment}
            rate={comment.rate}
            asin={comment.elementId}
            _id={comment._id}
          />
        ))}
    </div>
  );
};

export default CommentList;
