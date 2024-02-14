import React, { useState } from "react";
import { Card } from "react-bootstrap";
import classes from "./Card.module.css"


const CardBook = ( props ) => {
  const [selected, setSelected] = useState(false);

  const elementClicked = () => {
    setSelected(!selected);
  };

  const borderStyle = {
    borderColor: selected ? "red" : "black"
  };

  return (
    <Card className={classes["card"]} key={props.asin} style={borderStyle} onClick={elementClicked}>
      <img src={props.img} alt="Book" />
      <h4>{props.title}</h4>
      <p>{props.category}</p>
      <p>{props.price}€</p>
    </Card>
  );
};

export default CardBook;