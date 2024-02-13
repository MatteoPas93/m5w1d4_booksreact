import classes from "./AllTheBooks.module.css";
import { Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";


 export let jsonData = []
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

  return (
    <div className="d-flex flex-wrap justify-content-evenly gap-3">
      {data &&
        data.map((book) => (
          <Card className={classes["card"]} key={book.asin}>
            <img src={book.img} alt="Book" />
            <h4>{book.title}</h4>
            <p>{book.category}</p>
            <p>{book.price}€</p>
          </Card>
        ))}
    </div>
  );
};

export default EpicBooks;
