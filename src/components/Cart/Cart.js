import { Modal } from "../UI/Modal";
import classes from "./Cart.module.css";

export const Cart = (props) => {
  const cartItems = 
    <ul className=
    {classes["cart-items"]}>
      {[{ id: "a1" }, { name: "Some Food", amount: "$33" }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>;

  return (
    <Modal onBackDrop = {props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <><span>Total Amount</span>
        <span>69</span></>
      </div>
      <div className={classes.actions}>
        <button className={classes['butons-alt']} onClick = {props.onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
