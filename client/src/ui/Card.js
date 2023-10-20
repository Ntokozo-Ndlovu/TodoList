import React from 'react';
import styleClass from './Card.module.css';

const Card = (props)=>{
    return <div className={styleClass.card}>
    {props.children}
    </div>
}

export default Card;