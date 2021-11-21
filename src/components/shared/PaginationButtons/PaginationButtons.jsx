import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {IconButton, InputAdornment} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export const PaginationButtons = ({handlePageChange, total, page}) => {

    return (
            <Pagination
                count={total}
                color='primary'
                size='large'
                page={Number(page)}
                onChange={(e, pageNumber) => handlePageChange(pageNumber)}
            />
    );
}