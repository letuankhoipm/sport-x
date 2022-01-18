import { ActionTypes } from '../types/type';

export const addToCart = (product, quantity) => {
  console.log('run');
  return ({
    type: ActionTypes.CART_ADD,
    payload: {
      product,
      quantity: quantity || 1,
    },
  });
}

export const updateCartQuantity = (product, quantity) => ({
  type: ActionTypes.CART_UPDATE,
  payload: {
    product,
    quantity,
  },
});

export const removeFormCart = (product) => ({
  type: ActionTypes.CART_DELETE,
  payload: product,
});

export const clearCart = () => ({
  type: ActionTypes.CART_CLEAR,
});
