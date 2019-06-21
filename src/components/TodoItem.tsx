import React, { useContext } from 'react';
import { Todo } from 'src/models';
import TodoContext from 'src/context/TodosContext';

interface Props {
  todo: Todo;
}
function TodoItem(props: Props) {
  const { todoDispatch } = useContext(TodoContext);
  const handleClick = () => {
    todoDispatch({ type: 'TOGGLE_TODO', payload: props.todo.id });
  };
  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: props.todo.completed ? 'line-through' : 'none' }}
    >
      {props.todo.text}
    </li>
  );
}

export default TodoItem;
