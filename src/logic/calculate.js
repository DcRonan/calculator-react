import operate from './operate';

const calculate = (data, btnName) => {
  let { total, next, operation } = data;

  switch (btnName) {
    case 'AC':
      total = 0;
      next = null;
      operation = null;
      break;
    case '+/-':
      total = operate(total, -1, 'x');
      break;
    default:
      total = operate(total, next, operation);
      break;
  }

  return { total, next, operation };
};

export default calculate;
