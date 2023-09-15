import React, { useContext, useReducer, useState } from "react";
import Button from "../../UI/Button";
import styleClasses from "./AddTodoListForm.module.css";
import { generateGuid } from "../../Helpers/GuidGenerator";
import ErrorText from "../../UI/ErrorText";
import { todoListContext } from "../../stores/TodoListContext";

const AddTodoListForm = () => {
  const ctx = useContext(todoListContext);
  
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleTitleInput = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleDescriptionInput = (event) => {
    setTodoDescription(event.target.value);
  };

  const handleDateInput = (event) => {
    setTodoDate(event.target.value);
  };

  //Doing some form validation
  const handleAddTodoListForm = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    if (todoTitle === "" || todoDescription === "" || todoDate === "") {
      setErrorText("Fields can not be empty");
      return;
    }
    if (todoTitle === "") {
      setErrorText("please fill a title");
      return;
    }
    if (todoDescription === "") {
      setErrorText("please fill a description");
      return;
    }
    if (todoDate === "") {
      setErrorText("please select a date");
      return;
    }
    const todo = {
      id: generateGuid(),
      title: todoTitle,
      description: todoDescription,
      date: todoDate,
    };
    ctx.dispatch({type:'ADD', todo:todo})
    setTodoTitle("");
    setTodoDescription("");
    setTodoDate("");
  };

  return (
    <form onSubmit={handleAddTodoListForm}>
      <label>Title</label>
      <input type="text" value={todoTitle} onChange={handleTitleInput} />
      <label>Description:</label>
      <input
        type="text"
        value={todoDescription}
        onChange={handleDescriptionInput}
      />
      <label>Date: </label>
      <input type="calendar" value={todoDate} onChange={handleDateInput} />
      <ErrorText text={errorText}></ErrorText>
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTodoListForm;
