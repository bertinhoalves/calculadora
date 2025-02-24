import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import '../styles/Keypad.css';

const buttons = [
  'C', '(', ')', '/', 
  '7', '8', '9', '*', 
  '4', '5', '6', '-', 
  '1', '2', '3', '+', 
  '0', '.', '=', 
  'sin', 'cos', 'tan', 'log', 'ln', '√', '^'
];

const Keypad = ({ onButtonPress }) => {
  return (
    <div className="keypad">
      {buttons.map((button) => (
        <Button key={button} value={button} onButtonPress={onButtonPress} />
      ))}
    </div>
  );
};

Keypad.propTypes = {
  onButtonPress: PropTypes.number.isRequired,
};

export default Keypad;
