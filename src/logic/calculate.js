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
    case '.':
      if (next) {
        if (next.indexOf(btnName) < 0) next += '.';
      } else if (operation) next += '0.';
      else {
        total += '.';
      }
      break;
    case '=':
      total = operate(total, next, operation);
      next = null;
      operation = null;
      break;
    default:
      total = operate(total, next, operation);
      next = null;
      operation = btnName;
      break;
  }

  return { total, next, operation };
};

export default calculate;
