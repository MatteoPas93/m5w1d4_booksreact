// import axios from "axios";

const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUyZjYzOGE4MDg3ZjAwMTljMmEzNWIiLCJpYXQiOjE3MDkzNzI5ODQsImV4cCI6MTcxMDU4MjU4NH0.eF-96f7xZDAdZfOowXpMBNcIJ93rlnbrSqnIlIwpASM"
export const deleteComment = async (id) => {
  try {
    await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${apiKey}`
          
      },
    });
    
  } catch (error) {
    console.error(error);
    
  }
};

