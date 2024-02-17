// import { useEffect } from "react";
import FormMessage from "../Form/Form";

const AddComment = ({ asin }) => {
  // console.log("asin", asin);
  // useEffect(() => {
  //   const commentPost = async () => {
  //     try {
  //       // const commentData = {
  //       //   comment: "Good",
  //       //   rate: 4,
  //       //   elementId: asin,
  //       // };
  //       await fetch(
  //         "https://striveschool-api.herokuapp.com/api/comments",
  //         {
  //           method: "POST",
  //           body: JSON.stringify(),
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization:
  //               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmNjhlMjA0NTcyZjAwMTk0OTM5NTgiLCJpYXQiOjE3MDgwOTE2MTgsImV4cCI6MTcwOTMwMTIxOH0.4WIOaHC0kc_1yvuly5YFr9w1gAL-ie7rgbByotZWHyg",
  //           },
  //         }
  //       );
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   commentPost();
  // }, []);

  return (
    <div>
      <FormMessage asin={asin} />
    </div>
  );
};

export default AddComment;
