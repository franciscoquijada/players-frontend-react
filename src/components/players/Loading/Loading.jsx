import React from 'react';
import {LinearProgress} from '@material-ui/core';

export const Loading = () => {

    return (
        <>
            <h2>Searching players</h2>
            <LinearProgress size='20%'/>
        </>
    );
};



