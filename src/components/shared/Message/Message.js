import React from 'react';
import './Message.css';
import PropTypes from 'prop-types';

export const Message = ({ message }) => {
  return (
    <div className="center">
      <h2>{message}</h2>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string
};
