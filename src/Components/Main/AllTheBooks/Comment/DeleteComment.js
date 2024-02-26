import axios from "axios";
import { apiKey } from "../../../../Reducer/booksSlice";

export const deleteComment = async (id) => {
  try {
    await axios.delete(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${apiKey}`
          
      },
    });
    
  } catch (error) {
    console.error(error);
    
  }
};

