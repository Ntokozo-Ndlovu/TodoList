import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import styleClasses from "./TodoList.module.css";
import {todoListContext} from "../../stores/TodoListContext";

const ListTodo = [
  {  
      id:'t1',
      title:'First Todo',
      description:'Important todo item that we need to do',
      startDate:'12 Jan 2023',
      endDate:'15 Dec 2023'
  },{  
      id:'t2',
      title:'Second Todo',
      description:'Important todo item that we need to do',
      startDate:'1 Jan 2023',
      endDate:'12 Dec 2023'
  }
]


const TodoList = (props) => {
  //const ctx = useContext(todoListContext);
  let list = ListTodo;
 // console.log('Context switch from list: ', ctx);
 return (
    <ul className={styleClasses.list}>
      {list.map((todoItem) => {
        return (
          <TodoListItem
            key={todoItem.id}
            id={todoItem.id}
            title={todoItem.title}
            description={todoItem.description}
            startDate={todoItem.startDate}
            endDate={todoItem.endDate}
            onDeleteNewTodo={props.onDeleteNewTodo}
          ></TodoListItem>
        );
      })}
    </ul>
  );
};

export default TodoList;
