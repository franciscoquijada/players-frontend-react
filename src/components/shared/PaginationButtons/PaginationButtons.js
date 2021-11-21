import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';

export const PaginationButtons = ({ handlePageChange, total, page }) => {
  return (
    <Pagination
      count={total}
      color="primary"
      size="large"
      page={Number(page)}
      onChange={(e, pageNumber) => handlePageChange(pageNumber)}
    />
  );
};

PaginationButtons.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
};
