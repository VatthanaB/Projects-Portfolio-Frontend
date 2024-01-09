import React, { useState, useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import axios from "axios";
interface CartProps {
  hideCartHandler: () => void;
}
function Cart(props: CartProps) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };
  interface Item {
    id: string;
    name: string;
    amount: number;
    price: number;
  }
  const cartItemAddHandler = (item: Item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData: {
    name: string;
    street: string;
    postal: string;
    city: string;
  }) => {
    setIsSubmitting(true);
    try {
      console.log(userData);
      console.log(cartCtx.items);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/food/orders`,
        {
          user: userData,
          orderedItems: cartCtx.items,
        }
      );
      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
    }
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };
  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfuly sent the ordder ! </p>
      <div className={classes.actions}>
        <button
          onClick={props.hideCartHandler}
          className={classes["button--alt"]}
        >
          Close
        </button>
      </div>
    </React.Fragment>
  );

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map(
        (item: { id: string; name: string; amount: number; price: number }) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        )
      )}
    </ul>
  );

  const modalAction = (
    <div className={classes.actions}>
      <button onClick={props.hideCartHandler} className={classes.button}>
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <div className={classes.card_main}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={props.hideCartHandler}
        />
      )}
      {!isCheckout && modalAction}
    </div>
  );

  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;
