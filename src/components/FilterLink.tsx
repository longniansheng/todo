import React, { useContext } from 'react';
import TodoContext from 'src/context/TodosContext';

interface Props {
  filter: string;
  children: React.ReactNode;
}

export default function FilterLink(props: Props) {
  const { filter, filterDispatch } = useContext(TodoContext);
  const handleClick = () => {
    filterDispatch({ type: 'SET_VISIBILITY', payload: props.filter });
  };
  return props.filter === filter ? (
    <span>{props.children}</span>
  ) : (
    <a href={`#${props.filter}`} onClick={handleClick}>
      {props.children}
    </a>
  );
}
