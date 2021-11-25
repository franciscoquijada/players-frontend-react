import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

export const Loading = ({ message }) => {
  return (
    <>
      <h2>{message}</h2>
      <CircularProgress color="primary" size="7rem" />
    </>
  );
};

Loading.propTypes = {
  message: PropTypes.string
};
