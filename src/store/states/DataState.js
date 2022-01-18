import { createStore } from 'redux';
import { rootReducer } from '../reducers/index';

export const SportsStoreDataStates = createStore(rootReducer);

// export const SportsStoreDataStates = createStore(
//   CommonReducer(ShopReducer, CartReducer)
// );
