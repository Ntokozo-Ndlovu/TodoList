import classes from './HomePage.module.css';
import { Button, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import TodoList from '../components/TodoList/TodoList';
import { Plus } from 'react-bootstrap-icons';




const HomePage = ()=>{

    return <div style={{height:'100vh'}}>
        <Container  className='h-100' fluid>
        <Row className='h-100'>
            <Col>
                <h4>Todo</h4>
                <br></br>
                <TodoList></TodoList></Col>
             <Col>
                <h4>Completed</h4>
                <br></br>
                <TodoList></TodoList></Col>
        </Row>
    </Container>
        <Button className={`${classes.floating} ${classes.circle}`} size="lg"><Plus size={60} /></Button>
     </div>
    


}
export default HomePage;


