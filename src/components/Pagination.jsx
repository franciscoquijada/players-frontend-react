import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2)
        }
    }
}));

export const PaginationButtons = ({handlePageChange, total}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination
                count={total}
                size='large'
                onChange={(e) => handlePageChange(e)}
            />
        </div>
    );
}