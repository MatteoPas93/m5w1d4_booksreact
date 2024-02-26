import { useState } from "react";
import "./Comments.css";
import { deleteComment } from "./DeleteComment";

const SingleComment = ({ comment, rate, author, id, asin }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteComment = async () => {
    try {
      await deleteComment(id);
      setIsDeleted(true);
    } catch (error) {
      console.error(error);
    }
  };
  if (isDeleted) {
    return null;
  }

  return (
    <div id={asin} className="border-comment">
      <p>{author}</p>
      <p>{comment}</p>
      <p>Rate:{rate}</p>
      <button onClick={handleDeleteComment} className="mb-2 ms-2">
        Delete
      </button>
    </div>
  );
};

export default SingleComment;
