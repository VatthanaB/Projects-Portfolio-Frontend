import React from "react";
import MealsSummary from "./MealsSummary";
import AvaibleMeals from "./AvaibleMeals";

function Meals() {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvaibleMeals />
    </React.Fragment>
  );
}

export default Meals;
