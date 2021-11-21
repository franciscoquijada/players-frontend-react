import React from 'react';
import { LinearProgress } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Loading = ({ message }) => {
  return (
    <>
      <h2>{message}</h2>
      <LinearProgress size="20%" />
    </>
  );
};

Loading.propTypes = {
  message: PropTypes.string
};
