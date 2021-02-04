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

  render() {
    const { data } = this.state;
    return (
      <section>
        <Display result={data.next ? data.next : data.total} />
        <ButtonPanel />
      </section>
    );
  }
}
