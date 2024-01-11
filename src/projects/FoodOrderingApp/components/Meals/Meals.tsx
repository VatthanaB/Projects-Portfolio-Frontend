// Importing necessary modules
import React from "react";
// Importing MealsSummary component
import MealsSummary from "./MealsSummary";
// Importing AvaibleMeals component
import AvaibleMeals from "./AvaibleMeals";

// Meals component
function Meals() {
  // Returns a fragment with MealsSummary and AvaibleMeals components
  return (
    <React.Fragment>
      <MealsSummary />
      <AvaibleMeals />
    </React.Fragment>
  );
}

// Export Meals component
export default Meals;
