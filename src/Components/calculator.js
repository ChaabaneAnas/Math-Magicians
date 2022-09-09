/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-classes-per-file */
import React from 'react';

class Display extends React.Component {
  render() {
    return (
      <div className="display">
        { this.props.state.total }
        { this.props.state.operation }
        { this.props.state.next }
      </div>
    );
  }
}

class Operations extends React.Component {
  render() {
    return (
      <div className="operations" onClick={this.props.handleClick}>
        <div>/</div>
        <div>x</div>
        <div>-</div>
        <div>+</div>
        <div>=</div>
      </div>
    );
  }
}

class Keyboard extends React.Component {
  render() {
    return (
      <div className="keyboard" onClick={this.props.handleClick}>
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
  }
}

export { Keyboard, Operations, Display };
