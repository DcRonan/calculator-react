import calculate from '../logic/calculate';

describe('Testing the calculator operations and sum', () => {
  test('+/- button should make a positive number negative', () => {
    const result = calculate({ total: '20', next: '', operation: '' }, '+/-');
    const { total } = result;
    expect(total).toEqual('-20');
  });

  test('+/- button should make a negative number positive', () => {
    const result = calculate({ total: '-20', next: '', operation: '' }, '+/-');
    const { total } = result;
    expect(total).toEqual('20');
  });

  test('% button should return its percentage', () => {
    const result = calculate({ total: '50', next: '', operation: '' }, '%');
    const { total } = result;
    expect(total).toEqual('0.5');
  });

  test('+ button should add 2 numbers and return its correct total', () => {
    const result = calculate({ total: '50', next: '20', operation: '+' }, '=');
    const { total } = result;
    expect(total).toEqual('70');
  });

  test('- button should subtract a number and return its correct total', () => {
    const result = calculate({ total: '50', next: '30', operation: '-' }, '=');
    const { total } = result;
    expect(total).toEqual('20');
  });

  test('x button should multiply two numbers and return its correct total', () => {
    const result = calculate({ total: '10', next: '20', operation: 'x' }, '=');
    const { total } = result;
    expect(total).toEqual('200');
  });

  test('÷ button should divide a number and return its correct sum', () => {
    const result = calculate({ total: '100', next: '20', operation: '÷' }, '=');
    const { total } = result;
    expect(total).toEqual('5');
  });

  test('AC button should clear all operations and total back to 0', () => {
    const result = calculate({ total: '100', next: '', operation: '' }, 'AC');
    expect(result).toEqual({ total: '0', next: null, operation: null });
  });

  test('. button should a decimal to a number', () => {
    const result = calculate({ total: '23', next: '', operation: '' }, '.');
    const { total } = result;
    expect(total).toEqual('23.');
  });

  test('= button should keep the same total', () => {
    const result = calculate({ total: '150', next: '', operation: '' }, '=');
    const { total } = result;
    expect(total).toEqual('150');
  });
});
