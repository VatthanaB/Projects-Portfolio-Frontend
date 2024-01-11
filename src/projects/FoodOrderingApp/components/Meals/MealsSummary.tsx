// Importing CSS module
import classes from "./MealsSummary.module.css";

// MealsSummary component
function MealsSummary() {
  // Returns a section with a summary of the meals
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        {/* Description of the service */}
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        {/* Additional information about the meals */}
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
}

// Export MealsSummary component
export default MealsSummary;
