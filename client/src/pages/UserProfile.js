import { Container } from 'react-bootstrap';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {Form as RouterForm} from 'react-router-dom';
import styleClasses from './UserProfile.module.css';

const userData = {
    username:'Ntokozo King',
    name:'Ntokozo',
    surname:'Ndlovu',
    email:'ntokozo@gmail.com'
}
 const handleControl = (event)=>{
    console.log('event: ', event);
}

const UserProfile = ()=>{
    const user = userData;
    return <>
    <div style={{height:'100vh'}}>
        <Container className='h-100'>
        <Row className='align-items-center h-50'>
        <Col className='d-flex align-items-center justify-content-center' style={{height:'100vh'}}>
            <div>
            <h1>{user.username}</h1>    
             <Image height={300} width={300} src="https://marketplace.canva.com/EAFfyNv3EC4/2/0/800w/canva-orange-black-modern-facebook-profile-picture-nEv2Bxx4TlY.jpg" roundedCircle/>
            </div>
           </Col>
            <Col>
                <RouterForm>
                <Form.Label >Name</Form.Label>
                <Form.Control name='name' onChange={handleControl} value={user.name} type='text'/>
                
                <Form.Label >Surname</Form.Label>
                <Form.Control name='surname' onChange={handleControl} value={user.surname} type='text'/>
                
                <Form.Label >email</Form.Label>
                <Form.Control name='email' onChange={handleControl} value={user.email} type='text'/>
                </RouterForm>
               </Col>
        </Row>
        <Row className='align-items-center h-50'>
            <Button>Save Changes</Button>
        </Row>
        </Container>
        </div>
    </>
}


export default UserProfile;