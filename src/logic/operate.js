import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  let result;

  switch (operation) {
    case '%':
      result = Big(numOne).mod(numTwo).toString();
      break;
    case '÷':
      result = Big(numOne).div(numTwo).toString();
      break;
    case 'x':
      result = Big(numOne).times(numTwo).toString();
      break;
    case '-':
      result = Big(numOne).minus(numTwo).toString();
      break;
    case '+':
      result = Big(numOne).plus(numTwo).toString();
      break;
    default:
      break;
  }

  return result;
};

export default operate;
