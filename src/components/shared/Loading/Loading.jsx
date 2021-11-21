import React from 'react';
import {LinearProgress} from '@material-ui/core';

export const Loading = ({message}) => {

    return (
        <>
            <h2>{message}</h2>
            <LinearProgress size='20%'/>
        </>
    );
};



