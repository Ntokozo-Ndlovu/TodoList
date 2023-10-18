import styles from './LoginPage.module.css';

import  Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form  from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import Col  from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const LoginPage = (props)=>{

    return <div style={{'backgroundColor':'#eee','height':'100vh' }}   >
        <Container className='py-5 h-100' fluid>
        <Row className='justify-content-center align-items-center h-40'>
            <Col className='col-2'>
            <Image height={300} width={300} src="https://marketplace.canva.com/EAFfyNv3EC4/2/0/800w/canva-orange-black-modern-facebook-profile-picture-nEv2Bxx4TlY.jpg" roundedCircle/>
            </Col>
        </Row>
        <Row className='justify-content-center align-items-center h-50'>
            <Col className='col-3'>
            <Form>
            <Form.Group>
                <Form.Label>Username: </Form.Label>
                <Form.Control type='name'/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password: </Form.Label>
                <Form.Control type='password' />
            </Form.Group>
            <Button >Login</Button>
            </Form>
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