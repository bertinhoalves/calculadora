import React, { useState, useEffect } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import '../styles/Calculator.css';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [lastPressed, setLastPressed] = useState('');

  useEffect(() => {
    const storedExpression = localStorage.getItem('expression');
    const storedResult = localStorage.getItem('result');
    if (storedExpression) setExpression(storedExpression);
    if (storedResult) setResult(storedResult);
  }, []);

  const handleButtonPress = (buttonValue) => {
    if (buttonValue === 'C') {
      setExpression('');
      setResult('');
      setLastPressed('');
    } else if (buttonValue === '=') {
      try {
        const res = evaluate(expression);
        setResult(res);
        localStorage.setItem('expression', expression);
        localStorage.setItem('result', res);
      } catch (error) {
        setResult('Error');
      }
      setLastPressed('=');
    } else {
      if (lastPressed === '=') {
        if (!isNaN(buttonValue)) { // Check if the button pressed is a number
          setExpression(buttonValue);
        } else {
          setExpression(result + buttonValue);
        }
      } else {
        setExpression(expression + buttonValue);
      }
      setLastPressed(buttonValue);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <Display expression={expression} result={result} />
        <Keypad onButtonPress={handleButtonPress} />
      </div>
    </div>
  );
};

export default Calculator;
