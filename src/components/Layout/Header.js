import {Fragment} from "react";
import potato from '../../assets/o.jpg'
import classes from './Header.module.css'
import HeaderCartButton  from "./HeaderCartButton";

const Header = props => {
    return(
        <Fragment>
            <header className = {classes.header}> 
                <h1> Food order service</h1>
                <HeaderCartButton/>
            </header>
            //because it has dash we cannot use . notation
            <div className ={classes['main-image']}>
                <img src= {potato} alt = "french fries"/>
            </div>
        </Fragment>)
};
export default Header;