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
});
