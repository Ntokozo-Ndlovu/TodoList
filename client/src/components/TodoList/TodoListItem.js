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
import {format, sub} from 'date-fns'
import { redirect ,useSubmit} from "react-router-dom";

const TodoListItem = (props) => {
  const submit = useSubmit();

  const handleDeleteTodo = () => {
    submit({id:props.id},{method:'DELETE',action:'todo'})
    };
  const handleCompleted = ()=>{
    submit({id:props.id,completed:true},{method:'PATCH',action:'todo'})
    }

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
            <Col className="col-5">start: {format(props.startDate,'dd MMM yyyy')}</Col>
            <Col className="col-5">end: {format(props.endDate,'dd MMM yyyy')}</Col>
            <Col className="col-1"><Button onClick={handleDeleteTodo}><Trash/></Button></Col>
            <Col className="col-1"><Button onClick={handleCompleted}><Check /></Button></Col>
          </Row>
            </Card.Body>
         
          </Card>
  );
};
export default TodoListItem;


export async function action({request}){
  const method = request.method;
  const formData = await request.formData();
  const token = localStorage.getItem('token');
  const todoId = formData.get('id');
    
  if(method == 'DELETE'){
    if(!todoId){
      throw new Error('Item does not exist')
    }
    const response = await fetch(`http://localhost:3000/api/v1/todo/${todoId}`,{method:'DELETE',
    headers:{
    'authorization':`Bearer ${token}`,
    'content-type':'application/json'
  }
  })
    if(!response.ok){
      throw new Error('Delete error')
    }  
  }
  else if(method == 'PATCH'){
    console.log('Patch: right')
    const completed = formData.get('completed');
    console.log('Completed: ',completed);
    const tempBody = {completed:completed};
    const response = await fetch(`http://localhost:3000/api/v1/todo/${todoId}`,{
      method:'PATCH',
      headers:{
        'authorization':`Bearer ${token}`,
        'content-type':'application/json'
      },
      body:JSON.stringify(tempBody)
    })
    if(!response.ok){
      throw new Error('Welele fethu');
    }
  }
   return redirect('/home')
}