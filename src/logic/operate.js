import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  const x = numOne ? Big(numOne) : null;
  const y = numTwo ? Big(numTwo) : null;
  let result = 0;

  switch (operation) {
    case '%':
      result = Big(x.mod(y));
      break;
    case '÷':
      result = Big(x.div(y));
      break;
    case 'x':
      result = Big(x.times(y));
      break;
    case '-':
      result = Big(x.minus(y));
      break;
    case '+':
      result = Big(x.plus(y));
      break;
    default:
      break;
  }

  return result.toString();
};

export default operate;
