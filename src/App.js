import React from 'react';
import { Display, Keyboard, Operations } from './Components/calculator';
import calculate from './logic/calculate';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.setState(calculate({}, 'AC'));
  }

  handleClick = (e) => {
    this.setState((prevState) => calculate(prevState, e.target.textContent));
  };

  render() {
    return (
      <div className="app-container">
        <Display state={this.state} />
        <div className="second-row">
          <Keyboard handleClick={this.handleClick} />
          <Operations handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
