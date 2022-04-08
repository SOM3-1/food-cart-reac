import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import {useContext} from "react";
import { CartContext } from "../../store/cart-context";

const HeaderCartButton = props =>{
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((a,items) => { return a +items.amount;},0) ;

    return(
        <button className = {classes.button} onClick= {props.onButtonClick}>
            <span className = {classes.icon} ><CartIcon/></span>
            <span>Cart</span>
            <span className = {classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}
export default HeaderCartButton;