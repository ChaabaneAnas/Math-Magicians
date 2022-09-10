/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const Display = (props) => {
  const { total, operation, next } = props.state;
  return (
    <div className="display">
      { total }
      { operation }
      { next }
    </div>
  );
};

const Operations = (props) => (
  <div className="operations">
    <button type="button" onClick={props.handleClick}>/</button>
    <button type="button" onClick={props.handleClick}>x</button>
    <button type="button" onClick={props.handleClick}>-</button>
    <button type="button" onClick={props.handleClick}>+</button>
    <button type="button" onClick={props.handleClick}>=</button>
  </div>
);

const Keyboard = (props) => (
  <div className="keyboard">
    <button type="button" onClick={props.handleClick}>AC</button>
    <button type="button" onClick={props.handleClick}>+/-</button>
    <button type="button" onClick={props.handleClick}>%</button>
    <button type="button" onClick={props.handleClick}>7</button>
    <button type="button" onClick={props.handleClick}>8</button>
    <button type="button" onClick={props.handleClick}>9</button>
    <button type="button" onClick={props.handleClick}>4</button>
    <button type="button" onClick={props.handleClick}>5</button>
    <button type="button" onClick={props.handleClick}>6</button>
    <button type="button" onClick={props.handleClick}>1</button>
    <button type="button" onClick={props.handleClick}>2</button>
    <button type="button" onClick={props.handleClick}>3</button>
    <button type="button" className="Zero" onClick={props.handleClick}>0</button>
    <button type="button" onClick={props.handleClick}>.</button>
  </div>
);

export { Keyboard, Operations, Display };
