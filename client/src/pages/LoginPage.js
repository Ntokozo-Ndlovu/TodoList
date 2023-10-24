import styles from './LoginPage.module.css';

import  Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Form as RouterForm, redirect,json, Await} from 'react-router-dom';
import Form  from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import Col  from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';
import Error  from '../components/Error';

const LoginPage = (props)=>{
    const errors = useRouteError();
    if(errors){
        console.log('errors: ', errors);
    }
    return <div style={{'backgroundColor':'#eee','height':'100vh' }}   >
        <Container className='py-5 h-100' fluid>
        <Row className='justify-content-center align-items-center h-40 p-6'>
            <Col className='col-2'>
            <Image height={200} width={200} src="https://marketplace.canva.com/EAFfyNv3EC4/2/0/800w/canva-orange-black-modern-facebook-profile-picture-nEv2Bxx4TlY.jpg" roundedCircle/>
            </Col>
        </Row>
        <Row className='justify-content-center align-items-center h-50'>
            <Col className='col-3'>
            {errors && <Error message={errors.data.message}></Error>}
            <RouterForm method='post' action='/login'>
            <Form.Group>
                <Form.Label>Email: </Form.Label>
                <Form.Control name="email" id="email" type='name'/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password: </Form.Label>
                <Form.Control name="password" id="password" type='password' />
            </Form.Group>
            <Button type="submit" >Login</Button>
            </RouterForm>
            </Col>
           </Row>
           <Row className='justify-content-center align-items-center'>
            <Col className='col-3'>
            To create a new account click <Link to='/signup'> Here</Link>
            </Col>
           </Row>
    </Container>
    </div> 
    
  ;
}

export default LoginPage;

export async function action({request}){
    const formData = await request.formData();
    const userLoginData = {
        email: formData.get('email'),
        password: formData.get('password')
    }
    const response = await fetch('http://localhost:3000/api/v1/auth/login',{method:'POST',body:JSON.stringify(userLoginData) ,headers:{'Content-Type':'application/json'}});

    if(!response.ok){
        const {message} = await response.json();
        throw new json({message:message},{status:response.status})
    }
    if(response){
        const {userId,token} = await response.json();
        localStorage.setItem('token',token);
        localStorage.setItem('userId',userId);
        //I need to save the token
        return redirect('/home');
    }
    //we gonna do some interesting stuffs. I need to add a login contextAPI
    return redirect('/login')
}