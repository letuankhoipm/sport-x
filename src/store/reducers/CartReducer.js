import { ActionTypes } from '../types/type';

export const CartReducer = (state, action) => {
  let newState = { cart: [], cartItems: 0, cartPrice: 0, ...state };
  switch (action.type) {
    case ActionTypes.CART_ADD:
      console.log(action);
      const product = action.payload.product;
      const quantity = action.payload.quantity;

      let existing = newState.cart.find(
        (item) => item.product.id === product.id
      );

      if (existing) {
        existing.quantity += quantity;
      } else {
        newState.cart = [...newState.cart, action.payload];
      }

      newState.cartItems += quantity;
      newState.cartPrice += product.price * quantity;

      return newState;

    case ActionTypes.CART_UPDATE:
      newState.cart = newState.cart.map((item) => {
        if (item.product.id !== action.payload.product.id) {
          return item;
        }
        const diff = action.payload.quantity - item.quantity;
        newState.cartItems += diff;
        newState.cartPrice += item.product.price * diff;
        return action.payload;
      });
      return newState;

    case ActionTypes.CART_DELETE:
      return {
        ...state,
        cart: [],
        cartItems: 0,
        cartPrice: 0,
      };

    default:
      return state || {};
  }
};
