import React from "react";
import classes from "./Checkout.module.css";

const Checkout = ({ onCancel }) => {
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <div className={classes.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" />
        </div>
        <div className={classes.control}>
          <label htmlFor="postal">Postal code</label>
          <input type="text" id="postal" />
        </div>
        <div className={classes.control}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
        </div>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </form>
    </>
  );
};

export default Checkout;
