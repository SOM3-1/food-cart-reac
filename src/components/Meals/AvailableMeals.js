import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItems/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Margherita',
      description: 'Classic delight with 100% real mozzarella cheese',
      price: 239.0,
    },
    {
      id: 'm2',
      name: 'Farmhouse',
      description: 'Delightful combination of onion, capsicum, tomato & grilled mushroom',
      price: 459.22,
    },
    {
      id: 'm3',
      name: 'Pepper Barbecue Chicken',
      description: 'Pepper barbecue chicken for that extra zing',
      price: 449.99,
    },
    {
      id: 'm4',
      name: 'Chicken Sausage',
      description: 'American classic! Spicy, herbed chicken sausage on pizza',
      price: 399.00,
    },
    {
      id: 'm5',
      name: 'The Unthinkable Pizza',
      description: 'Don\'t think',
      price: 549,
    },
    {
      id: 'm6',
      name: 'The 4 Cheese Pizza',
      description: 'Cheese Overloaded pizza with 4 different varieties of cheese and 4 times the cheese of a normal pizza,.. ',
      price: 639,
    },
    {
      id: 'm7',
      name: 'Indo Fusion Chicken Pizza',
      description: 'Relish the fusion of 5 of your favorite chicken toppings - Peri Peri Chicken, Chicken Pepperoni, Chicken Tikka,..',
      price: 420.69,
    },
  ];

const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map( meal => 
    <MealItem     
        id={meal.id} // this is new!
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />);
    return(
        <section className = {classes.meals}>
           <Card>
               <ul>
                {mealList}
                </ul>
            </Card>
        </section>
    );

}
export default AvailableMeals;
