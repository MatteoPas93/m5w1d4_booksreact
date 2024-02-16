import { useState } from "react";
import Form from 'react-bootstrap/Form';

const AddComment = ({ comment }) => {
    const [commentData, setCommentData] = useState(null);
  
    // useEffect(() => {
      const commentPost = async () => {
        try {
          const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/comments",
            {
              method: "POST",
              body: JSON.stringify(comment),
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmNjhlMjA0NTcyZjAwMTk0OTM5NTgiLCJpYXQiOjE3MDgwOTE2MTgsImV4cCI6MTcwOTMwMTIxOH0.4WIOaHC0kc_1yvuly5YFr9w1gAL-ie7rgbByotZWHyg",
              },
            }
          );
          const data = await response.json();
          setCommentData(data);
        } catch (error) {
          console.error(error);
        }
      };
      
    // }, [comment]);

    return (
        <div>
            <Form.Control type="text" placeholder="Scrivi qui la tua recensione..." />
            <button onClick={commentPost}>
              Aggiungi recensione
            </button>
        </div>
    )
  
  };
  
  export default AddComment;