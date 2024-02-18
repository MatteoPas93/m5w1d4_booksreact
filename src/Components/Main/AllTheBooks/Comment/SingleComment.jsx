import { useState } from "react"
import classes from "./Comments.module.css"
import { deleteComment } from "./DeleteComment"

const SingleComment = ({comment, rate, elementId, _id, onDelete }) => {
    const [isDeleted, setIsDeleted] = useState(false)

    const commentId = _id

  const handleDeleteComment = async () => {
    try {
      await deleteComment(commentId)
      setIsDeleted(true)
      onDelete(commentId)
    } catch (error) {
      console.error(error);
    }
  };
  if (isDeleted) {
    return null;
  }

    return (
        <div id={commentId} className={classes["border-comment"]}>
            <p>{comment}</p>
            <p>Rate:{rate}</p>
            <p>{elementId}</p>
            <button onClick={handleDeleteComment} className="mb-2 ms-2">Delete</button>
        </div>
    )
}

export default SingleComment