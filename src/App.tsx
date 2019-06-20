import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoContext from "./context/TodosContext";
import useTodoHooks from "./hooks/useTodoHooks";

function App() {
  const [todos, dispatch] = useTodoHooks();
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Header />
      <TodoList />
    </TodoContext.Provider>
  );
}

export default App;
