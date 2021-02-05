import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  const x = Big(numOne);
  const y = Big(numTwo);
  let result = 0;

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
