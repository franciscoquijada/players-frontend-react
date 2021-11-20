import React from 'react';
import '../styles/Card.css';
import {LinearProgress} from '@material-ui/core';

export const Loading = () => {

    return (
        <>
            <h2>Searching players</h2>
            <LinearProgress size='20%'/>
        </>
    );
};



