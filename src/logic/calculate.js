import operate from './operate';

const calculate = (data, btnName) => {
  let { total, next, operation } = data;

  switch (btnName) {
    case '+/-':
      if (total) total = operate(total, '-1', 'x');
      else if (next) next = operate(next, '-1', 'x');
      break;
    case '%':
      if (next) next = operate(next, '100', '÷');
      else if (total) total = operate(total, '100', '÷');
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
      if (next && total) {
        if (!operation) {
          operation = btnName;
        }
        total = operate(total, next, operation);
      } else if (next) total = next;
      operation = btnName;
      next = null;
      break;
    case '=':
      if (!operation) break;
      else if (next && total) total = operate(total, next, operation);
      else {
        total = next;
      }
      operation = null;
      next = null;
      break;
    case '.':
      if (next) {
        if (next.indexOf(btnName) < 0) next += '.';
      } else if (operation) next = '0.';
      else if (total.indexOf(btnName) < 0) total += '.';
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (next) next += btnName;
      else {
        next = btnName;
      }
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    default:
      break;
  }

  return { total, next, operation };
};

export default calculate;
