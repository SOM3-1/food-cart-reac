import { CartContext } from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// we get these arguments automatically by react
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];
    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const newTotal = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: newTotal,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== existingItem.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ALL") {
    
      return {
        items: [],
        totalAmount: 0
      }
    }
  return defaultCartState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartStatement] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartStatement({
      type: "ADD",
      item: item,
    });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartStatement({
      type: "REMOVE",
      id: id,
    });
  };

  const removeAllItemToCartHandler = () => {
    dispatchCartStatement({
      type: "REMOVE_ALL",
    });
  };

  const cardContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    removeAll: removeAllItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cardContext}>
      {props.children}
    </CartContext.Provider>
  );
};
