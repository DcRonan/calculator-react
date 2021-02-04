import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    const state = calculate(this.state, buttonName);
    this.setState(state);
  }

  update = () => {
    // eslint-disable-next-line no-unused-vars
    const { total, next, operation } = this.state;

    if (next) {
      return next;
    }
    return total;
  }

  render() {
    return (
      <section>
        <Display result={this.update()} />
        <ButtonPanel handleClick={this.handleClick} />
      </section>
    );
  }
}
