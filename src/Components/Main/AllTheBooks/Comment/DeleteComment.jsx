export const deleteComment = async (asin) => {
  try {
    await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmNjhlMjA0NTcyZjAwMTk0OTM5NTgiLCJpYXQiOjE3MDgwOTE2MTgsImV4cCI6MTcwOTMwMTIxOH0.4WIOaHC0kc_1yvuly5YFr9w1gAL-ie7rgbByotZWHyg",
      },
    });
    return alert("Commento eliminato con successo");
  } catch (error) {
    console.error(error);
  }
};
