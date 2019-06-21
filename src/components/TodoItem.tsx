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

  const handleDelete = () => {
    todoDispatch({ type: 'DELETE_BY_ID', payload: props.todo.id });
  };
  return (
    <li
      style={{ textDecoration: props.todo.completed ? 'line-through' : 'none' }}
    >
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1' }} onClick={handleClick}>
          {props.todo.text}
        </div>
        <button onClick={handleDelete}>删除</button>
      </div>
    </li>
  );
}

export default TodoItem;
