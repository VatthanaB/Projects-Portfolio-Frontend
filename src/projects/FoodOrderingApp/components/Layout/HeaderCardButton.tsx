import { useContext, useEffect, useState } from "react";
import CardIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import CartContext from "../../store/cart-context";

interface HeaderCardButtonProps {
  showCartHandler: () => void;
}
function HeaderCardButton(props: HeaderCardButtonProps) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  // add the bump class to the button when an item is added to the cart
  useEffect(() => {
    // if there are no items in the cart, return
    if (items.length === 0) {
      return;
    }
    // add the bump class to the button
    setBtnIsHighlighted(true);
    // set a timer to remove the bump class after 300ms
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button onClick={props.showCartHandler} className={btnClasses}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span className={classes.cart_text}> Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
}

export default HeaderCardButton;
