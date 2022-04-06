import classes from './Input.module.css';

export const Input = (props) => {
    
   //whatever vprops we get from mealItem we'll use the same here
    return(
        <div className = {classes.input}>
            <label htmlFor = {props.input.id}>
                {props.label}
            </label>
            <input {...props.input}/>
        </div>

    );

};
