import {Fragment} from "react";
import potato from '../../assets/o.jpg'
import pizza from '../../assets/flat.jpg'
import classes from './Header.module.css'
import HeaderCartButton  from "./HeaderCartButton";

const Header = props => {
    
  //pass down props.onShowShowCart prop from header to headercartbutton as onButtonClick
    return(
        <Fragment>
            <header className = {classes.header}> 
                <h1> Not Pizzzzaaaa Ordering Service</h1>
                <HeaderCartButton onButtonClick = {props.onShowCart}/>
            </header>
            //because it has dash we cannot use . notation
            <div className ={classes['main-image']}>
                <img src= {pizza} alt = "french fries"/>
            </div>
        </Fragment>)
};
export default Header;