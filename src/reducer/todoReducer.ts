import produce from 'immer';
import { Todo, Action } from '../models';

const todoReducer = (state: Todo[], action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'ADD_TODO':
        draft.push(action.payload);
        break;
      case 'TOGGLE_TODO':
        draft[action.payload].completed = !draft[action.payload].completed;
        break;
      case 'DELETE_BY_ID':
        draft.splice(draft.findIndex(todo => todo.id === action.payload), 1);
        break;
      case 'REMOVE_ALL':
        while (draft.length > 0) {
          draft.pop();
        }
      case 'REMOVE_COMPLETED':
        for (const todo of state) {
          if (todo.completed) {
            draft.splice(draft.findIndex(item => item.id === todo.id), 1);
          }
        }
      default:
        break;
    }
  });

export default todoReducer;
