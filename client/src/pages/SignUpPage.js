import classes from './SignUpPage.module.css';

import { Form as FormRouter, redirect, useRouteError, json} from 'react-router-dom';
import { Card, CardGroup, Form, FormLabel } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from 'react-router-dom';
import { useSubmit } from 'react-router-dom';
import { useRef } from 'react';
import  Error from '../components/Error';
import { saveToken } from '../util/token-manager';
import { useState } from 'react';

const SignUpPage = ()=>{
    //reference for component
    const nameRef = useRef();
    const surnameRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    const verifyRef = useRef();
    const [errors, setErrors] = useState(useRouteError());
    const submit = useSubmit(); 
 
 
    const handleSignUp = ()=>{
        
        const user = {
            name:nameRef.current.value,
            surname:surnameRef.current.value,
            email:emailRef.current.value,
            username:usernameRef.current.value,
            password:passwordRef.current.value
        };
        if(passwordRef.current.value == verifyRef.current.value){
            submit(user,{method:'POST', action:''})
        }
        else {
            setErrors({data:{message:'Password does not match'}});
            return;
        }
    }

    return <FormRouter>
        <div className={classes['main-container']} >
        <Container className='h-100'  fluid>
            <Row className='justify-content-center align-items-center h-100'>
                <Col className='col-11 col-md-6 col-lg-3' >
                    <div className='p-10'>
                    <Card border='white'>
                            <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">Basic Information</Card.Subtitle>
                                {errors && <Error message={errors.data.message}></Error>}
                                <FormLabel>Name:</FormLabel>
                                <Form.Control ref={nameRef} type='text'/>
                                <FormLabel>Surname:</FormLabel>
                                <Form.Control ref={surnameRef} type='text'/>
                                <FormLabel> Email:</FormLabel>
                                <Form.Control ref={emailRef} type='text'/>
                            </Card.Body>
                           </Card>
                    </div>
                        <br />
                        <Card border='white'>
                            <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">Account</Card.Subtitle>
                               <FormLabel >Username:</FormLabel>
                                <Form.Control ref={usernameRef} type='text'/>
                                <FormLabel>Password:</FormLabel>
                                <Form.Control ref={passwordRef} type='password'/> 
                                <FormLabel>Retype Password:</FormLabel>
                                <Form.Control ref={verifyRef} type='password'/>
                            </Card.Body>
                        </Card>
                            <br />
                 
                          <Row>
                            <Col>
                            <Link to='/login'>
                            <Button variant='secondary' className={classes['sec-button']} size="lg w-100">Back</Button>
                            </Link>
                             </Col>
                            <Col>
                            <Button variant='primary' className={classes['pri-button']} onClick={handleSignUp} size="lg w-100">Sign Up</Button>
                            </Col>
                          </Row>
                 </Col>
            </Row>
            </Container>
        </div>
    </FormRouter>
 
}

export default SignUpPage;

export async function action({request}) {
    const form = await request.formData();
    const data = {
        name:form.get('name'),
        surname:form.get('surname'),
        username:form.get('username'),
        password:form.get('password'),
        email:form.get('email')
    }

    const response = await fetch('http://localhost:3000/api/v1/auth/register',{method:'POST',body:JSON.stringify(data),headers:{'content-type':'application/json'}})
    if(!response.ok){
        const {message} = await response.json();
        throw json({message:message},{status:response.status})
    }

    if(response.ok){
        const {userId,token} = await response.json();
        
        saveToken(token)
        localStorage.setItem('userId',userId);
        return redirect('/home')
    }
    return redirect('/register'); 
}