import React, { useState } from "react";
import { Card } from "react-bootstrap";
import classes from "./SingleBook.module.css";
import CommentArea from "../Main/AllTheBooks/Comment/CommentArea";

const CardBook = ({ img, title, category, price, asin }) => {
  const [selected, setSelected] = useState(false);

  const elementClicked = () => {
    setSelected(!selected);
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
      {selected && <CommentArea asin={asin} />}
    </>
  );
};

export default CardBook;

// export const setSelectedCard = (selectedCard) => {
//   return { type: 'SET_SELECTED_CARD', payload: selectedCard};
// };
