import AddComment from "./AddComments";
import CommentList from "./CommentsList";
import "./Comments.css";
import { useSelector } from "react-redux";

const CommentArea = ({ asin }) => {
  const isCommentAreaOpen = useSelector(
    (state) => state.comment.isCommentAreaOpen
  );
  if (!isCommentAreaOpen) {
    return null;
  }

  return (
    <div className="sectionComments col-lg-4" data-testid="comments-area" >
      <h4 >Comments</h4>
      <div className="commentsArea">
        <AddComment asin={asin} />
        <CommentList  asin={asin} />
      </div>
    </div>
  );
};

export default CommentArea;
