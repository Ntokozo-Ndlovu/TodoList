import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import styleClasses from "./TodoList.module.css";
import {todoListContext} from "../../stores/TodoListContext";

const TodoList = (props) => {
  const ctx = useContext(todoListContext);
  let list = ctx.todoList;
  console.log('Context switch from list: ', ctx);
 return (
    <ul className={styleClasses.list}>
      {list.map((todoItem) => {
        return (
          <TodoListItem
            key={todoItem.id}
            id={todoItem.id}
            title={todoItem.title}
            description={todoItem.description}
            date={todoItem.date}
            onDeleteNewTodo={props.onDeleteNewTodo}
          ></TodoListItem>
        );
      })}
    </ul>
  );
};

export default TodoList;
