/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './Navbar';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const data = {
  total: '0',
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
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="calculator">
        <Display result={update()} />
        <ButtonPanel handleClick={handleClick} />
      </main>
    </>
  );
};

export default App;
