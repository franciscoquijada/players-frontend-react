import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

export const PaginationButtons = ({handlePageChange, total, page}) => {

    return (
            <Pagination
                count={total}
                color='primary'
                size='large'
                page={Number(page)}
                onChange={(e) => handlePageChange(e)}
                hidePrevButton
                hideNextButton
            />
    );
}