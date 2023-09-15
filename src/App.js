import React, { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList/TodoList";
import AddTodoList from "./Components/AddTodoList/AddTodoList";
import TodoListContext from "./stores/TodoListContext";

function App() {
 
  return (
    <TodoListContext>
      <AddTodoList />
      <TodoList />
    </TodoListContext>
       );
}

export default App;
