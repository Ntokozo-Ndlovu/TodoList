import classes from './SignUpPage.module.css';

import { Card, CardGroup, Form, FormLabel } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from 'react-router-dom';

const SignUpPage = ()=>{

    return <Form>
        <div style={{'backgroundColor':'#eee','height':'100vh' }} >
        <Container className='h-100'  fluid>
            <Row className='justify-content-center align-items-center h-100'>
                <Col className='col-3' >
                    <div className='p-10'>
                    <Card >
                            <CardHeader>
                                User Bio Information
                            </CardHeader>
                            <Card.Body>
                                <FormLabel>Name:</FormLabel>
                                <Form.Control type='text'/>
                                <FormLabel>Surname:</FormLabel>
                                <Form.Control type='text'/>
                                <FormLabel>Email:</FormLabel>
                                <Form.Control type='text'/>
                            </Card.Body>
                           </Card>
                    </div>
                        <br />
                        <Card>
                            <CardHeader>
                                User Auth
                            </CardHeader>
                            <Card.Body>
                               <FormLabel>Username:</FormLabel>
                                <Form.Control type='text'/>
                                <FormLabel>Password:</FormLabel>
                                <Form.Control type='text'/> 
                                <FormLabel>Retype Password:</FormLabel>
                                <Form.Control type='text'/>
                            </Card.Body>
                        </Card>
                            <br />
                 
                          <Row>
                            <Col>
                            <Link to='/login'>
                            <Button variant='secondary' size="lg w-100">Back</Button>
                            </Link>
                             </Col>
                            <Col>
                            <Button variant='primary' size="lg w-100">Sign Up</Button>
                            </Col>
                          </Row>
                 </Col>
            </Row>
            </Container>
        </div>
          </Form>
 
}

export default SignUpPage;