/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import calculate from '../logic/calculate';

const Display = (props) => (
  <div className="display">
    { props.state.total}
    { props.state.operation }
    { props.state.next }
  </div>
);

const Operations = (props) => (
  <div className="operations" onClick={props.handleClick}>
    <div>/</div>
    <div>x</div>
    <div>-</div>
    <div>+</div>
    <div>=</div>
  </div>
);

const Keyboard = (props) => (
  <div className="keyboard" onClick={props.handleClick}>
    <div>AC</div>
    <div>+/-</div>
    <div>%</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div className="Zero">0</div>
    <div>.</div>
  </div>
);

export { Keyboard, Operations, Display };
