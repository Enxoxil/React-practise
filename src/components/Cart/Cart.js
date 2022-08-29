import React, { useContext, useState } from "react";
import Modal from "../UI/Modal/Modal.js";
import classes from "./Cart.module.css";
import CartContext from "./../../store/cart-context.js";
import CartItem from "./CartItem.js";
import Checkout from "./Checkout.js";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isOrder, setIsOrder] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const orderHandler = () => {
    setIsOrder(true);
  };

  const confirmOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch("https://meal-5c1ef-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clear();
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const actions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}{" "}
    </div>
  );
  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>

      {isOrder && (
        <Checkout onConfirm={confirmOrderHandler} onCancel={props.onHideCart} />
      )}
      {!isOrder && actions}
    </>
  );
  const submitContent = (
    <>
      <p>Sending...</p>
    </>
  );
  const didSubmitContent = (
    <>
      <p>Done!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {isSubmitting && !didSubmit && submitContent}
      {didSubmit && !isSubmitting && didSubmitContent}
      {!didSubmit && !isSubmitting && cartModalContent}
    </Modal>
  );
};

export default Cart;
