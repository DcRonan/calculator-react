/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = buttonName => {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  }

  update() {
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
