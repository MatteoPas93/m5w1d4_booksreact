import AddComment from './AddComments';
import CommentList from './CommentsList';
import classes from "./Comments.module.css"


const CommentArea = ({asin}) => {
   return (
    <div className={classes["commentsArea"]}>
    <AddComment asin={asin} />
    <CommentList asin={asin} />
    </div>
)
}

export default CommentArea



