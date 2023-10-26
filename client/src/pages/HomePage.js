import classes from './HomePage.module.css';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import { AddTodoListForm , TodoList, Modal } from './../components';

import { Plus } from 'react-bootstrap-icons';
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';
import mapTodoItem from '../helpers/map-todo-item';
import { clearToken, getTokenDuration, getToken } from '../util/token-manager';
import { json } from "react-router-dom";

const HomePage = ()=>{
    const [show, setShow] = useState(false);
    const loaderData = useLoaderData();
    const todoList = loaderData.data.map(item => mapTodoItem(item));
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    useEffect(()=>{
        const duration = getTokenDuration();
        console.log('duration: ', duration);
        
        if(duration !=='EXPIRED'){
            setTimeout(()=>{
            clearToken();
            navigate('/login')
        },duration)
        } 
        else {
            clearToken();
            navigate('/login')
        }

    },[getTokenDuration])

    return <> 
        <Modal show={show} handleClose={handleClose}><AddTodoListForm></AddTodoListForm></Modal>
        <div style={{height:'100vh'}}>
        <Container  className='h-100' fluid>
        <Row className='h-100'>
            <Col>
                <h4>Not Complete</h4>
                <br></br>
                <TodoList list={todoList}></TodoList></Col>
             <Col>
                <h4>Completed</h4>
                <br></br>
                <TodoList completed={true} list={todoList}></TodoList></Col>
        </Row>
         </Container>
        <Button className={`${classes.floating} ${classes.circle}`} onClick={handleShow} size="lg"><Plus size={60} /></Button>
     </div>
     </>
    
}
export default HomePage;


export async function loader(){
    const token = getToken();
    if(!token){
        return redirect('/login');
    }

    const response = await fetch('http://localhost:3000/api/v1/todo',{
      headers:{'content-type':'application/json',
    'authorization':`Bearer ${token}`}  
    })
    
    if(!response.ok){
        const { message } = await response.json(); 
        throw json({ message:message },{ status:response.status}) 
    }

    return response;
}