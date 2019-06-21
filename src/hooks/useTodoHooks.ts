import { useReducer } from 'react';
import { todoReducer, visibilityReducer } from '../reducer';
import { Todo, Action } from 'src/models';

export default function useTodoHooks(): [
  Todo[],
  React.Dispatch<Action>,
  string,
  React.Dispatch<Action>
] {
  const [todos, todoDispatch] = useReducer(todoReducer, []);
  const [filter, filterDispathc] = useReducer(visibilityReducer, 'SHOW_ALL');
  return [todos, todoDispatch, filter, filterDispathc];
}
