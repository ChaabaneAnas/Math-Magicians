/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Display, Keyboard, Operations } from './Components/calculator';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Display />
        <Operations />
        <Keyboard />
      </div>
    );
  }
}
