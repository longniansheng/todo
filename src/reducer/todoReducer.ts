import produce from 'immer';
import { Todo, Action } from '../models';

const todoReducer = (state: Todo[], action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'ADD_TODO':
        draft.push(action.payload);
        return;
      case 'TOGGLE_TODO':
        const idx = draft.findIndex(todo => todo.id === action.payload);
        draft[idx].completed = !draft[idx].completed;
        return;
      case 'DELETE_BY_ID':
        draft.splice(draft.findIndex(todo => todo.id === action.payload), 1);
        return;
      case 'REMOVE_ALL':
        return draft.splice(0, 0);
      case 'REMOVE_COMPLETED':
        return draft.filter(todo => !todo.completed);
      default:
        return;
    }
  });

// const todoReducer = produce((draft: Todo[] = [], action: Action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       draft.push(action.payload);
//       return;
//     case 'TOGGLE_TODO':
//       draft[action.payload].completed = !draft[action.payload].completed;
//       return;
//     case 'DELETE_BY_ID':
//       draft.splice(draft.findIndex(todo => todo.id === action.payload), 1);
//       return;
//     case 'REMOVE_ALL':
//       draft.splice(0, 0);
//       return;
//     case 'REMOVE_COMPLETED':
//       return draft.filter(todo => !todo.completed);
//     default:
//       return;
//   }
// });

export default todoReducer;
