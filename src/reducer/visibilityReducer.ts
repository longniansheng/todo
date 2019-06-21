import { Action } from '../models';

const visibilityReducer = (state: string = 'SHOW_ALL', action: Action) => {
  switch (action.type) {
    case 'SET_VISIBILITY':
      return action.payload;

    default:
      return state;
  }
};

export default visibilityReducer;
