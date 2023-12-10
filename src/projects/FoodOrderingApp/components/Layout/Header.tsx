import React from "react";
import mealsimage from "../../../../assets//images/foodOrderingApp/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

interface HeaderProps {
  showCartHandler: () => void;
}
function Header(props: HeaderProps) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Food Ordering App</h1>
        <HeaderCardButton showCartHandler={props.showCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsimage} alt="meals images" />
      </div>
    </React.Fragment>
  );
}

export default Header;
