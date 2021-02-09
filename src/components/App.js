/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const data = {
  total: null,
  next: null,
  operation: null,
};

const App = () => {
  const [state, setState] = useState(data);

  const handleClick = buttonName => {
    const newState = calculate(state, buttonName);
    setState(newState);
  };

  const update = () => {
    const { total, next, operation } = state;

    if (next) return next;
    return total;
  };

  return (
    <main>
      <Display result={update()} />
      <ButtonPanel handleClick={handleClick} />
    </main>
  );
};

export default App;
