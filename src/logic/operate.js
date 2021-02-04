import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  const x = new Big(numOne);
  const y = new Big(numTwo);
  let result;

  switch (operation) {
    case '%':
      result = x.mod(y);
      break;
    case '÷':
      result = x.div(y);
      break;
    case 'x':
      result = x.times(y);
      break;
    case '-':
      result = x.minus(y);
      break;
    case '+':
      result = x.plus(y);
      break;
    default:
      break;
  }

  return result.toString();
};

export default operate;
