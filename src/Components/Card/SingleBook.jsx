import React, { useState } from "react";
import { Card } from "react-bootstrap";
import classes from "./SingleBook.module.css";
import { useDispatch } from "react-redux";
import { toggleCommentArea } from "../../Reducer/commentsSlice";
// import CommentArea from "../Main/AllTheBooks/Comment/CommentArea";

const CardBook = ({ img, title, category, price, asin, onClick }) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch()

  const elementClicked = () => {
    setSelected(!selected);
    dispatch(toggleCommentArea())
    onClick()
  };

  const borderStyle = {
    borderColor: selected ? "red" : "black",
  };

  return (
    <>
      <Card
        className={classes["card"]}
        key={asin}
        style={borderStyle}
        onClick={elementClicked}
      >
        <img src={img} alt="Book" />
        <h4>{title}</h4>
        <p>{category}</p>
        <p>{price}€</p>
      </Card>
      {/* {selected && <CommentArea asin={asin}/>} */}
    </>
  );
};

export default CardBook;


