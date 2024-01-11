// Importing necessary modules and CSS
import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
// Importing CartContext
import CartContext from "../../../store/cart-context";

// Interface for MealItemProps
interface MealItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

// MealItem component
function MealItem(props: MealItemProps) {
  // Using CartContext to get the cart context
  const cartCtx = useContext(CartContext);
  // Formatting the price to 2 decimal places
  const price = `$${props.price.toFixed(2)}`;

  // Function to handle adding items to the cart
  const addToCartHandler = (amount: number) => {
    // Adding item to the cart context
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  // Returns a list item with the meal details and a form to add the meal to the cart
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm addToCartHandler={addToCartHandler} id={""} />
      </div>
    </li>
  );
}

// Export MealItem component
export default MealItem;
