import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

export const PaginationButtons = ({handlePageChange, total}) => {

    return (
            <Pagination
                count={total}
                color='primary'
                size='large'
                onChange={(e) => handlePageChange(e)}
            />
    );
}