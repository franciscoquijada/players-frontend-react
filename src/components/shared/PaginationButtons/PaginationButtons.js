import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  paginationUL: {
    display: 'inline-flex'
  }
});

export const PaginationButtons = ({ handlePageChange, total, page }) => {
  const classes = useStyles();
  return (
    <Pagination
      count={total}
      classes={{ ul: classes.paginationUL }}
      color="primary"
      size="large"
      page={Number(page)}
      siblingCount={0}
      onChange={(e, pageNumber) => handlePageChange(pageNumber)}
    />
  );
};

PaginationButtons.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
};
