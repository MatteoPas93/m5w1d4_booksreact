import classes from "./AllTheBooks.module.css"
import { Card } from "react-bootstrap";
import React, { useState, useEffect } from 'react';

const EpicBooks = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://epibooks.onrender.com/fantasy?limit=20");
        if (!response.ok) {
          throw new Error("Response Failed");
        }
        const jsonData = await response.json();
        setData(jsonData)
      } catch(err) {
        console.error(err)
      }
    }
    fetchData()
  }, []);
  return (
    <div className="d-flex flex-wrap justify-content-evenly gap-3">
      {data && data.map((book) => (
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
