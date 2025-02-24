import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ value, onButtonPress }) => {
  return (
    <button className="button" onClick={() => onButtonPress(value)}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired
};

export default Button;