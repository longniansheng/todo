import React, { useContext } from 'react';
import TodoContext from 'src/context/TodosContext';

interface Props {
  remove: string;
  children: React.ReactNode;
}

export default function FilterLink(props: Props) {
  const { todoDispatch } = useContext(TodoContext);

  const handleClcik = () => {
    todoDispatch({ type: props.remove });
  };

  return <button onClick={handleClcik}>{props.children}</button>;
}
