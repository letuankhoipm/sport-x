import { createStore } from 'redux';
import { ShopReducer } from '../reducers/ShopReducer';

export const SportsStoreDataStates = createStore(ShopReducer);
