const Calculate = (data, btnName) => {
  let { total, next, operation } = data;

  switch (btnName) {
    default:
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
  }

  return { total, next, operation };
};

export default Calculate;
