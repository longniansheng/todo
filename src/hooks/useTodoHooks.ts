import { useReducer } from "react";
import reducer from "../reducer";
import { Todo, Action } from "src/models";

export default function useTodoHooks(): [Todo[], React.Dispatch<Action>] {
  const [todos, dispatch] = useReducer(reducer, []);
  return [todos, dispatch];
}
