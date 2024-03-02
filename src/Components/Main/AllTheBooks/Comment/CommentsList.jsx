import { useState, useEffect } from "react";
import SingleComment from "./SingleComment";
import { useSelector } from "react-redux";
import { isRendering } from "../../../../Reducer/booksSlice";


export const fetchComments = async (asin) => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
      {
        method: "GET",
        headers: {
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUyZjYzOGE4MDg3ZjAwMTljMmEzNWIiLCJpYXQiOjE3MDkzNzI5ODQsImV4cCI6MTcxMDU4MjU4NH0.eF-96f7xZDAdZfOowXpMBNcIJ93rlnbrSqnIlIwpASM",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error");
    }

    const data = await response.json();
    return data
  
  } catch (error) {
    console.error(error);
  }
};


const CommentList = ({asin}) => {
  const [data, setData] = useState([]);
  const rendering = useSelector(isRendering);

  useEffect(() => {
    const fetchCommentsData = async () => {
      const comments = await fetchComments(asin);
       setData(comments);
    };
    
    fetchCommentsData();
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
            id={comment._id}
          />
        ))}
    </div>
  );
};

export default CommentList;
