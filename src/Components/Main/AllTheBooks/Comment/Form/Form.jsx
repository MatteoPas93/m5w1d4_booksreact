import { useState, useEffect } from "react";
import { apiKey, handleRendering } from "../../../../../Reducer/booksSlice";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import classes from "./Form.module.css";
import { deleteComment } from "../DeleteComment";
import { useDispatch } from "react-redux";
const FormMessage = ({asin}) => {
  const [commentData, setCommentData] = useState();
  const [validated, setValidated] = useState(false);
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return;
    }

    const formData = new FormData(form);
    const comment = {
      comment: formData.get("comment"),
      rate: formData.get("rate"),
      elementId: asin,
    };

    setCommentData(comment);
    setValidated(true);
  };

  const fetchPost = async (comment) => {
   await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${apiKey}`,
      },
    });
  };

  useEffect(() => {
    const sendComment = async () => {
      try {
        if (commentData) {
          await fetchPost(commentData);
           
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (commentData) {
      setComments((prevComments) => [...prevComments, commentData]);
      sendComment();
      dispatch(handleRendering())
    }
  }, [commentData, dispatch]);

  return (
    <div className={classes["form-width"]}>
      <Form
        className="mb-3"
        validated={validated}
        noValidate
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter you comment here"
              defaultValue=""
              name="comment"
            />
            <Form.Control.Feedback>Sending Successful</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              required
              type="number"
              min="1"
              max="5"
              placeholder="Rate 1 - 5"
              defaultValue=""
              name="rate"
            />
            <Form.Control.Feedback>Sending Successful</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Send you comment"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Send comment</Button>
      </Form>

      {comments &&
        comments.map((comment, index) => (
          <div id={comment._id} asin={comment.elementId} className={classes["border-comment"]} key={index}>
            <p>{comment.comment}</p>
            <p>Rate: {comment.rate}</p>
            <button onClick={deleteComment} className="mb-2 ms-2">
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default FormMessage;
