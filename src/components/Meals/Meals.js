import React from "react";
import MealsSummary from "./MealsSummary.js";
import AvailableMeals from "./AvailableMeals.js";

const Meals = (props) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
