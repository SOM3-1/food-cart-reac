import {Fragment} from "react";
import ff from '../../assets/French_Fries.JPG'
import meals from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = props => {
    return(
        <Fragment>
            <header className = {classes.header}> 
                <h1> Food order service</h1>
                <button> Check cart</button>
            </header>
            //because it has dash we cannot use . notation
            <div className ={classes['main-image']}>
                <img src= {ff} alt = "french fries"/>
            </div>
        </Fragment>)
};
export default Header;