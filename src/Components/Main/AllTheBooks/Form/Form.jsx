import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const FormMessage = ({ asin }) => {
  const [commentData, setCommentData] = useState();
  const [validated, setValidated] = useState(false);
//   const [comments, setComments] = useState([]);
  //    console.log("asin", asin);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setCommentData({
      comment: event.target[0].value,
      rate: event.target[1].value,
      elementId: event.target[2].value,
    });

    setValidated(true);
  };

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const form = event.currentTarget;
  //     if (form.checkValidity() === false) {
  //         event.stopPropagation();
  //         return;
  //     }

  //     const formData = new FormData(form);
  //     const comment = {
  //         comment: formData.get(event.target.value),
  //         rate: formData.get(event.target.value),
  //         elementId: asin
  //     };

  //     setCommentData(comment);
  //     setValidated(true);
  // };

  const fetchAsin = async (comment) => {
    await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmNjhlMjA0NTcyZjAwMTk0OTM5NTgiLCJpYXQiOjE3MDgwOTE2MTgsImV4cCI6MTcwOTMwMTIxOH0.4WIOaHC0kc_1yvuly5YFr9w1gAL-ie7rgbByotZWHyg",
      },
    });
  };

  useEffect(() => {
    try {
      if (commentData) {
        fetchAsin(commentData);
        // setComments(prevComments => [...prevComments, commentData]);
        console.log(commentData);
      }
    } catch (error) {
      console.error(error);
    }
  }, [commentData]);

  return (
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
          />
          <Form.Control.Feedback>Sending Successful</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Id</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Id"
              aria-describedby="inputGroupPrepend"
              value={asin}
              required
              readOnly
            />
            <Form.Control.Feedback type="invalid">
              Choose a username.
            </Form.Control.Feedback>
          </InputGroup>
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
      <Button type="submit">Submit Form</Button>
    </Form>
  );
};

export default FormMessage;
