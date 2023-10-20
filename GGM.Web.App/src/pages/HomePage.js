import classes from './HomePage.module.css';
import { Button, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

import AddTodoListForm from './../components/AddTodoList/AddTodoListForm';

import TodoList from '../components/TodoList/TodoList';
import { Plus } from 'react-bootstrap-icons';
import Modal from './../components/modal/Modal';
import { useLoaderData } from 'react-router';
import mapTodoItem from '../helpers/map-todo-item';

const HomePage = ()=>{
    const [show, setShow] = useState(false);
    const loaderData = useLoaderData();
    const todoList = loaderData.data.map(item => mapTodoItem(item));
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:3000/api/v1/todo',{
      headers:{'content-type':'application/json',
    'authorization':`Bearer ${token}`}  
    })
    if(!response.ok){
        throw new Error('Fetching todo error')// will be handled soons
    }
    //const responseData = response.json();
    return response;
}