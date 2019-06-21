import React, { useState, useContext } from 'react';
import TodosContext from '../context/TodosContext';

let id = 0;
export default function Header() {
  const { todoDispatch } = useContext(TodosContext);
  const [text, setText] = useState<string>('');
  const handlleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!!!text) {
      return;
    }
    todoDispatch({
      type: 'ADD_TODO',
      payload: { id: id++, text, completed: false }
    });
    setText('');
  };
  return (
    <form onSubmit={handlleSubmit}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button>添加</button>
    </form>
  );
}
