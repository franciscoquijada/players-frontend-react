import React from 'react';
import './Message.css';

export const Message = ({message}) => {

    return (
        <div className='center'>
            <h2>{message}</h2>
        </div>
    );
};



