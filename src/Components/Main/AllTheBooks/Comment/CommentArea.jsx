import AddComment from "./AddComments";
import CommentList from "./CommentsList";
import "./Comments.module.css";
import { useSelector } from "react-redux";

const CommentArea = ({ asin }) => {
  const isCommentAreaOpen = useSelector(
    (state) => state.comment.isCommentAreaOpen
  );
  if (!isCommentAreaOpen) {
    return null;
  }

  return (
    <div className="col-lg-4 section-comments">
      <h4>Comments</h4>
      <div className="commentsArea">
        <AddComment asin={asin} />
        <CommentList asin={asin} />
      </div>
    </div>
  );
};

export default CommentArea;
