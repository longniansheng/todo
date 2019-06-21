import React, { useContext, useMemo } from 'react';
import TodoContext from '../context/TodosContext';
import TodoItem from './TodoItem';
import getVisibilityTodo from 'src/utils';

function TodoList() {
  const { todos, filter } = useContext(TodoContext);

  const visibleTodos = useMemo(() => getVisibilityTodo(todos, filter), [
    todos,
    filter
  ]);

  return (
    <ul>
      {visibleTodos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}

export default TodoList;
