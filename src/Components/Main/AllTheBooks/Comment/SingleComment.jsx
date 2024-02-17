import classes from "./Comments.module.css"
import { deleteComment } from "./DeleteComment"
// import { nanoid } from "nanoid"

const SingleComment = ({comment, rate, elementId }) => {
    return (
        <div  className={classes["border-comment"]}>
            <p>{comment}</p>
            <p>Rate:{rate}</p>
            <p>{elementId}</p>
            <button onClick={deleteComment} className="mb-2 ms-2">Delete</button>
        </div>
    )
}

export default SingleComment