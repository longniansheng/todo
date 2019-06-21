import React from 'react';
import { Todo, Action } from '../models';

interface TodoContextInterface {
  todos: Todo[];
  todoDispatch: React.Dispatch<Action>;
  filter: string;
  filterDispatch: React.Dispatch<Action>;
}
const TodoContext = React.createContext<TodoContextInterface>({
  todos: [],
  todoDispatch: () => undefined,
  filter: 'SHOW_ALL',
  filterDispatch: () => undefined
});

export default TodoContext;
