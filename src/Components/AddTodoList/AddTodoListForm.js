import React, { useContext, useReducer, useState } from "react";

import styleClasses from "./AddTodoListForm.module.css";
import { generateGuid } from "../../helpers/GuidGenerator";
import ErrorText from "../../ui/ErrorText";
import { todoListContext } from "../../stores/TodoListContext";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';


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

  return (<>
    <Form onSubmit={handleAddTodoListForm}>
    <Row>
    <Form.Label>Title</Form.Label>
      <Form.Control type="text" value={todoTitle} onChange={handleTitleInput} />
  
    </Row>
    <Row>    <Form.Label>Description:</Form.Label>
      <Form.Control
        type="text"
        value={todoDescription}
        onChange={handleDescriptionInput}
      />
    </Row>
    <Row>
    <Form.Label>startDate: </Form.Label>
      <Form.Control type="calendar" value={todoDate} onChange={handleDateInput} />
    </Row>
    <Row>
      <Col>
      <Form.Label>end Date: </Form.Label>
      <Form.Control type="calendar" value={todoDate} onChange={handleDateInput} />
      </Col>
    </Row>
    <Row>
    <ErrorText text={errorText}></ErrorText>
      <Button >Add</Button>
    </Row>
      </Form>
  </>
  );
};

export default AddTodoListForm;
