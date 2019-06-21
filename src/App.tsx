import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoContext from './context/TodosContext';
import useTodoHooks from './hooks/useTodoHooks';
import Footer from './components/Footer';

function App() {
  const [todos, todoDispatch, filter, filterDispatch] = useTodoHooks();
  return (
    <TodoContext.Provider
      value={{ todos, todoDispatch, filter, filterDispatch }}
    >
      <Header />
      <TodoList />
      <Footer />
    </TodoContext.Provider>
  );
}

export default App;
