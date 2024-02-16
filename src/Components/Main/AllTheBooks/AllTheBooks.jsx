import React, { useState, useEffect } from "react";
import CardBook from "../../Card/SingleBook";

export let jsonData = [];
const EpicBooks = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
     
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/books", 
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmNjhlMjA0NTcyZjAwMTk0OTM5NTgiLCJpYXQiOjE3MDgwOTE2MTgsImV4cCI6MTcwOTMwMTIxOH0.4WIOaHC0kc_1yvuly5YFr9w1gAL-ie7rgbByotZWHyg"
          }
        });
        if (!response.ok) {
          throw new Error("Response Failed");
        }
        jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
        
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const mapArray = (array) => {
    return array.map((book) => (
      <CardBook
        title={book.title}
        img={book.img}
        category={book.category}
        price={book.price}
        key={book.asin}
      />
    ));
  };

  return (
    <div className="d-flex flex-wrap justify-content-evenly gap-3">
      {data && mapArray(data)}
    </div>
  );
};

export default EpicBooks;
