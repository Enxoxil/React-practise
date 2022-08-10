import React from "react";
import mealsImage from "../../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton.js";

const Header = (props) => (
  <>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton onCLick={props.onShowCart}>Cart</HeaderCartButton>
    </header>
    <div className={classes["main-image"]}>
      <img src={mealsImage} alt="Food" />
    </div>
  </>
);

export default Header;
