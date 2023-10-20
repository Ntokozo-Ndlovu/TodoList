import classes from './Modal.modules.css';
import { Modal } from 'react-bootstrap';

const AddTodoModal = (props)=>{

    return <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        size='lg' centered
      >
       <Modal.Header closeButton>
        <Modal.Title>Create a New Todo</Modal.Title>
    </Modal.Header>
    <Modal.Body>{props.children}</Modal.Body>
  </Modal></>
}

export default AddTodoModal;