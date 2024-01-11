// Importing necessary modules and CSS
import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
// Importing Input component
import Input from "../../UI/Input";

// Interface for Props
interface Props {
  addToCartHandler: (amount: number) => void;
  id: string;
}

// MealItemForm component
function MealItemForm(props: Props) {
  // State variable for amount validation
  const [amountIsValid, setAmountIsValid] = useState(true);

  // Reference for the amount input
  const amountInputRef = useRef<HTMLInputElement>(null);

  // Function to handle form submission
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // Getting the entered amount
    const enteredAmount = amountInputRef.current
      ? amountInputRef.current.value
      : "";
    // Converting the entered amount to a number
    const enteredAmountNumber = +enteredAmount;

    // Validating the entered amount
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      // If the amount is not valid, update the state variable and return
      setAmountIsValid(false);
      return;
    }

    // If the amount is valid, call the addToCartHandler function
    props.addToCartHandler(enteredAmountNumber);
  };

  // Returns a form with an Input component and a submit button
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {/* If the amount is not valid, display an error message */}
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

// Export MealItemForm component
export default MealItemForm;
