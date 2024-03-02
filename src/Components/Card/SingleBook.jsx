import React, { useState } from "react";
import { Card } from "react-bootstrap";
import classes from "./SingleBook.module.css";
import { useDispatch } from "react-redux";
import { toggleCommentArea } from "../../Reducer/commentsSlice";
import { Link } from "react-router-dom";

const CardBook = ({ img, title, category, price, asin, onClick }) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const elementClicked = () => {
    setSelected(!selected);
    dispatch(toggleCommentArea());
    
  };

  const borderStyle = {
    borderColor: selected ? "red" : "black",
    borderWidth: selected ? "2px" : "1px",
  };

  return (
    <>
      <Card
      data-testid="card"
        className={classes["card"]}
        key={asin}
        style={borderStyle}
        onClick={() => { onClick(); elementClicked()}}
      >
        <img src={img} alt="Book" />
        <h4>{title}</h4>
        <p>{category}</p>
        <p>{price}€</p>
        <Link to={`/book/${asin}`}>
          <button className={classes["button-style"]}>Detail</button>
        </Link>
      </Card>
    </>
  );
};

export default CardBook;
