/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './Navbar';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import Calculator from './Calculator';

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
      <header>
        <Navbar />
      </header>
      <main>
        <section className="calc-main">
          <div>
            <Calculator />
          </div>
          <div style={{ width: '70%' }}>
            <Display result={update()} />
            <ButtonPanel handleClick={handleClick} />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
