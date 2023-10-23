import classes from './Error.module.css';
import { Alert } from 'react-bootstrap';
import { useRouteError} from 'react-router-dom';


 const Error = (props)=>{
    const error = useRouteError();
    console.log('Error: ',error);
    return <Alert variant="danger"><div className="container justify-content-center">{props.message}</div></Alert>
}
export default Error;