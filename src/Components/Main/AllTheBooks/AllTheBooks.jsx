import React, { useState, useEffect } from "react";
import CardBook from "../../Card/Card";

export let jsonData = [];
const EpicBooks = () => {
  const [data, setData] = useState("");
  // const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true)
      try {
        const response = await fetch("https://epibooks.onrender.com/fantasy");
        if (!response.ok) {
          throw new Error("Response Failed");
        }
        jsonData = await response.json();
        setData(jsonData);
        // setLoading(false)
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
