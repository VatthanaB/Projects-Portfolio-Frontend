// Importing necessary hooks and context
import React, { useReducer } from "react";
import CartContext from "./cart-context";

// Interface for an item
interface Item {
  id: string;
  name: string;
  amount: number;
  price: number;
}

// Interface for the cart state
interface CartState {
  items: Item[];
  totalAmount: number;
}

// Default state of the cart
const defaultCartState: CartState = {
  items: [],
  totalAmount: 0,
};

// Type for cart actions
type CartAction =
  | { type: "ADD"; item: Item }
  | { type: "REMOVE"; id: string }
  | { type: "CLEAR" };

// Reducer function for cart actions
const cartReducer = (state: CartState, action: CartAction): CartState => {
  // Logic for "ADD" action
  if (action.type === "ADD") {
    // Calculate new total amount
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // Find if the item already exists in the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    // If item exists, update the amount
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    // If item does not exist, add it to the cart
    else {
      updatedItems = state.items.concat(action.item);
    }

    // Return updated state
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  // Logic for "REMOVE" action
  if (action.type === "REMOVE") {
    // Find the item to be removed
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    // If only one item, remove it from the cart
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    // If more than one item, decrease the amount
    else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  // Logic for "CLEAR" action
  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

// Props for CartProvider component
interface CartProviderProps {
  children: React.ReactNode;
}

// CartProvider component
const CartProvider: React.FC<CartProviderProps> = (props) => {
  // Use reducer hook for cart state and dispatch function
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // Handler for adding item to cart
  const addItemToCartHandler = (item: Item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  // Handler for removing item from cart
  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  // Handler for clearing the cart
  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  // Cart context values
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  // Provide the cart context to children components
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

// Export CartProvider component
export default CartProvider;
