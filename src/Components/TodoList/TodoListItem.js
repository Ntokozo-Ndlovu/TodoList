import React, { useContext } from "react";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import styleClasses from "./TodoListItem.module.css";
import { todoListContext } from "../../stores/TodoListContext";

const TodoListItem = (props) => {
  const ctx = useContext(todoListContext);

  const handleDeleteTodo = () => {
    ctx.dispatch({type:'REMOVE', id: props.id})
    };
  return (
    <Card>
      <li className={styleClasses["grid-todo-item"]}>
        <div className={styleClasses["container"]}>
          <h4>{props.title}</h4>
          <div className={styleClasses["content-container"]}>
            <p>description: {props.description}</p>
            <p>date: {props.date}</p>
          </div>
        </div>
        <div>
          <Button onClick={handleDeleteTodo} className={styleClasses.button}>
            Delete
          </Button>
        </div>
      </li>
    </Card>
  );
};
export default TodoListItem;
