import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css';

const Display = ({ expression, result }) => {
  return (
    <div className="display">
      <div className="expression">{expression || '0'}</div>
      <div className="result">{result}</div>
    </div>
  );
};

Display.propTypes = {
  expression: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};

export default Display;
