import React from "react";

interface Item {
  id: string;
  name: string;
  amount: number;
  price: number;
}

interface CartContextType {
  items: Item[];
  totalAmount: number;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = React.createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export default CartContext;
