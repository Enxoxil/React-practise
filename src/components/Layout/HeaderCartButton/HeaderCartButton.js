import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context.js";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const numberOfCartItems = items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <button className={btnClasses} onClick={props.onCLick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
