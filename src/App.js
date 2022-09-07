/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Display, Keyboard, Operations } from './Components/calculator';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Display result={0} />
        <div className="second-row">
          <Keyboard />
          <Operations />
        </div>
      </div>
    );
  }
}
