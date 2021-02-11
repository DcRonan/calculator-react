import operate from '../logic/operate';

const x = 123;
const y = 50;

describe('Testing the operations using big.js', () => {
  test('÷ should divide the numbers correctly', () => {
    const result = operate(x, y, '÷');
    expect(result).toEqual('2.46');
  });

  test('x should multiply the numbers correctly', () => {
    const result = operate(x, y, 'x');
    expect(result).toEqual('6150');
  });

  test('x should multiply the numbers correctly - testing incorrect sum', () => {
    const result = operate(x, y, 'x');
    expect(result).not.toEqual('8605');
  });

  test('- should subtract the numbers correctly', () => {
    const result = operate(x, y, '-');
    expect(result).toEqual('73');
  });

  test('+ should add the numbers correctly', () => {
    const result = operate(x, y, '+');
    expect(result).toEqual('173');
  });

  test('+ should multiply the numbers correctly - testing incorrect sum', () => {
    const result = operate(x, y, 'x');
    expect(result).not.toEqual('124');
  });
});
