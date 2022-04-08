import classes from "./MealIemForm.module.css"
import { Input } from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = (event) => {
        //browser default on relaoding will be prevented
        event.preventDefault();

        const enteredAmount = (amountInputRef.current.value);
        const enteredAmountInNumber = +enteredAmount;

        if(enteredAmount.trim().length===0 || enteredAmountInNumber < 1 || enteredAmountInNumber >5){
            setAmountIsValid(false)
            return;
        }
        
        props.onAddToCart(enteredAmountInNumber);
    }
    

    // default input props we can set using react
    return(
        <form className = { classes.form} onSubmit = {submitHandler}>
               <Input
               ref = {amountInputRef}
                label='Amount'
                input={{
                    id: 'amount_' + props.id, // this changed!
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button > + Add </button>
            {!amountIsValid && <p> Bruh!! You missed to enter valid amount, go back to 1st grade</p>}
        </form>
    );
}

export default MealItemForm;