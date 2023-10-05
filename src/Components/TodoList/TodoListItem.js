import React, { useContext } from "react";
import styleClasses from "./TodoListItem.module.css";
import { todoListContext } from "../../stores/TodoListContext";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import {Col} from 'react-bootstrap';
import { Row} from 'react-bootstrap';
import { Trash } from "react-bootstrap-icons";
import { Check } from "react-bootstrap-icons";


const TodoListItem = (props) => {
  const ctx = useContext(todoListContext);

  const handleDeleteTodo = () => {
    ctx.dispatch({type:'REMOVE', id: props.id})
    };
  return (
    <Card>
          <CardHeader>
            <Card.Subtitle>
            {props.title}
            </Card.Subtitle>
            </CardHeader>
          <Card.Body>
            <Card.Text>
            {props.description} 
            </Card.Text>
            <Row>
            <Col className="col-5">date: {props.startDate}</Col>
            <Col className="col-5">end date: {props.endDate}</Col>
            <Col className="col-1"><Button onClick={handleDeleteTodo}><Trash/></Button></Col>
            <Col className="col-1"><Button><Check /></Button></Col>
          </Row>
            </Card.Body>
         
          </Card>
  );
};
export default TodoListItem;
