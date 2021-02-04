const Calculate = (data, btnName) => {
  let { total, next, operation } = data;

  switch (btnName) {
    case 'AC':
      total = 0;
      next = null;
      operation = null;
      break;
    case '+/-':
      // total = total + -1 + 'x'
      break;
    default:
      total = { total, next, operation };
      break;
  }

  const obj = { total, next, operation };
  return obj;
};

export default Calculate;
