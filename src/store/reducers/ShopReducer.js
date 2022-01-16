import { ActionTypes } from '../types/type';

export const ShopReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...storeData,
        [action.payload.dataType]: action.payload.data,
      };
    default:
      return storeData || {};
  }
};
