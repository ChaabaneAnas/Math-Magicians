import operate from '../operate';

it('sould do the right operation', () => {
  expect(operate(1, 2, '+')).toBe('3');
});

it('sould do the right operation', () => {
  expect(operate(2, 1, '-')).toBe('1');
});

it('sould do the right operation', () => {
  expect(operate(2, 3, 'x')).toBe('6');
});

it('sould do the right operation', () => {
  expect(operate(6, 3, '÷')).toBe('2');
});

it('sould do the right operation', () => {
  expect(operate(6, 3, '÷')).toBe('2');
});

it('sould do the right operation', () => {
  expect(operate(6, 0, '÷')).toBe("Can't divide by 0.");
});

it('sould do the right operation', () => {
  expect(operate(6, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
});

it('sould do the right operation', () => {
  expect(operate(6, 2, '%')).toBe('0');
});

it('sould do the right operation', () => {
  expect(operate(5, 2, '%')).toBe('1');
});
