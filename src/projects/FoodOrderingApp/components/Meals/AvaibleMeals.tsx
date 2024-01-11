// Importing necessary modules and CSS
import { useEffect, useState } from "react";
import classes from "./AvaibleMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import axios from "axios";

// AvaibleMeals component
const AvaibleMeals = () => {
  // Interface for a meal
  interface Meal {
    id: string;
    name: string;
    description: string;
    price: number;
  }

  // State variables for meals, loading status, and HTTP error
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState("");

  // Effect hook to fetch meals from the API
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/food/getFood`)
      .then((response) => {
        const meals: Meal[] = [];
        // Loop through the response data and create meals
        for (const key in response.data) {
          meals.push({
            id: response.data[key]._id,
            name: response.data[key].name,
            description: response.data[key].description,
            price: response.data[key].price,
          });
        }
        // Update the meals state and set loading status to false
        setMeals(meals);
        setIsLoading(false);
      })
      .catch((error) => {
        // On error, set loading status to false and update the HTTP error state
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, []);

  // If loading, return a loading message
  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  // If there's an HTTP error, return an error message
  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  // Map through the meals and create a MealItem component for each meal
  const mealsList = meals.map((meal: Meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  // Return the meals inside a Card component
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

// Export AvaibleMeals component
export default AvaibleMeals;
