import produce from "immer";
import { Todo, Action } from "../models";

const todoReducer = (state: Todo[], action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case "ADD_TODO":
        draft.push(action.payload);
        break;
      case "TOGGLE_TODO":
        draft[action.payload].completed = !draft[action.payload].completed;
        break;
      default:
        break;
    }
  });

export default todoReducer;
