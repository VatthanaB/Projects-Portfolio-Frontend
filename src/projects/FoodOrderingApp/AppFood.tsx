// Importing necessary components and hooks
import Header from "./components/Layout/Header"; // Header component
import { useState } from "react"; // useState hook from React
import Meals from "./components/Meals/Meals"; // Meals component
import Cart from "./components/Cart/Cart"; // Cart component
import CartProvider from "./store/CartProvider"; // CartProvider component

// AppFood function component
function AppFood() {
  // State variable for controlling the visibility of the cart
  const [cartIsShown, setCartIsShown] = useState(false);

  // Handler function to show the cart
  const showCartHandler = () => {
    setCartIsShown(true); // Set cartIsShown state to true
  };

  // Handler function to hide the cart
  const hideCartHandler = () => {
    setCartIsShown(false); // Set cartIsShown state to false
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default AppFood;
