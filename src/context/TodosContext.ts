import React from "react";
import { Todo, Action } from "../models";

interface TodoContextInterface {
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
}
const TodoContext = React.createContext<TodoContextInterface>({
  todos: [],
  dispatch: () => undefined
});

export default TodoContext;
