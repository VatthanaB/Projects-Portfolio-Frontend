// Importing React
import React from "react";

// Interface for an item
interface Item {
  id: string;
  name: string;
  amount: number;
  price: number;
}

// Interface for the context type
interface CartContextType {
  items: Item[]; // Array of items in the cart
  totalAmount: number; // Total amount in the cart
  addItem: (item: Item) => void; // Function to add an item to the cart
  removeItem: (id: string) => void; // Function to remove an item from the cart
  clearCart: () => void; // Function to clear the cart
}

// Creating the cart context with default values
const CartContext = React.createContext<CartContextType>({
  items: [], // Default items is an empty array
  totalAmount: 0, // Default total amount is 0
  addItem: () => {}, // Default addItem does nothing
  removeItem: () => {}, // Default removeItem does nothing
  clearCart: () => {}, // Default clearCart does nothing
});

// Exporting the cart context
export default CartContext;
