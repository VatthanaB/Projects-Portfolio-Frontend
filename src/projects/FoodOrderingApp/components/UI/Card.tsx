import React from "react";
import classes from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
}
function Card(props: CardProps) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
