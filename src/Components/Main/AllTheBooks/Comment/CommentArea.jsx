import AddComment from './AddComments/AddComments';
import CommentList from './CommentsList';
import classes from "./Comments.module.css"


const CommentArea = ({asin}) => {
   return (
    <div className={classes["commentsArea"]}>
    <CommentList asin={asin} />
    <AddComment asin={asin} />
    </div>
)
}

export default CommentArea



