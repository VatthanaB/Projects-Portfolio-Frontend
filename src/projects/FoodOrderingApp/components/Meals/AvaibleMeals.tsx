import { useEffect, useState } from "react";
import classes from "./AvaibleMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import axios from "axios";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Pad Thai",
//     description: "Classic Thai stir-fried noodles",
//     price: 11.99,
//   },
//   {
//     id: "m2",
//     name: "Banh Mi",
//     description: "Vietnamese sandwich with grilled meats",
//     price: 9.99,
//   },
//   {
//     id: "m3",
//     name: "Satay Skewers",
//     description: "Indonesian grilled skewers with peanut sauce",
//     price: 12.5,
//   },
//   {
//     id: "m4",
//     name: "Mango Sticky Rice",
//     description: "Thai dessert with sweet mango and sticky rice",
//     price: 7.99,
//   },
//   {
//     id: "m5",
//     name: "Pho",
//     description: "Traditional Vietnamese noodle soup",
//     price: 10.49,
//   },
//   {
//     id: "m6",
//     name: "Laksa",
//     description: "Spicy Malaysian coconut noodle soup",
//     price: 13.99,
//   },
//   {
//     id: "m7",
//     name: "Som Tum",
//     description: "Thai green papaya salad",
//     price: 8.99,
//   },
//   {
//     id: "m8",
//     name: "Nasi Goreng",
//     description: "Indonesian fried rice with vegetables and chicken",
//     price: 11.5,
//   },
// ];

const AvaibleMeals = () => {
  interface Meal {
    id: string;
    name: string;
    description: string;
    price: number;
  }
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/food/getFood`)
      .then((response) => {
        const meals: Meal[] = [];
        for (const key in response.data) {
          meals.push({
            id: response.data[key]._id,
            name: response.data[key].name,
            description: response.data[key].description,
            price: response.data[key].price,
          });
        }
        setMeals(meals);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  interface Meal {
    id: string;
    name: string;
    description: string;
    price: number;
  }
  const mealsList = meals.map((meal: Meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvaibleMeals;
