import { ActionTypes } from '../types/type';
import { data as phData } from '../data/placeholderData';

export const loadData = (dataType) => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType: dataType,
    data: phData[dataType],
  },
});
