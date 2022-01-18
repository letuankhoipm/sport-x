import { combineReducers } from 'redux';
import { CartReducer } from './CartReducer';
import { ShopReducer } from './ShopReducer';

export const rootReducer = combineReducers({
  shop: ShopReducer,
  cart: CartReducer,
});
