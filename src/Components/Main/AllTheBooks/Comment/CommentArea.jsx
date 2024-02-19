import AddComment from "./AddComments";
import CommentList from "./CommentsList";
import classes from "./Comments.module.css";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";

const CommentArea = ({ asin }) => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Modal
      className={classes["modal"]}
      show={showModal}
      onHide={handleCloseModal}
    >
      <Modal.Header>
        <Modal.Title>Feedback</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className={classes["commentsArea"]}>
          <AddComment asin={asin} />
          <CommentList asin={asin} />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleCloseModal} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommentArea;
