import calculate from '../calculate';

describe('caluclate suite', () => {
  it('should reset everything to null', () => {
    const obj = {
      total: 9,
      next: 8,
      operation: '+',
    };
    const result = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: null,
      next: 9,
      operation: '+',
    };
    const result = {
      total: null,
      next: '99',
      operation: '+',
    };
    expect(calculate(obj, '9')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: null,
      next: null,
      operation: '+',
    };
    const result = {
      total: null,
      next: '9',
      operation: '+',
    };
    expect(calculate(obj, '9')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: null,
      next: 9,
      operation: null,
    };
    const result = {
      next: '99',
      total: null,
    };
    expect(calculate(obj, '9')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const result = {
      next: '9',
      total: null,
    };
    expect(calculate(obj, '9')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: null,
      next: '9.',
      operation: null,
    };
    const result = {
      total: null,
      next: '9.',
      operation: null,
    };
    expect(calculate(obj, '.')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: null,
      next: '9',
      operation: null,
    };
    const result = {
      total: null,
      next: '9.',
      operation: null,
    };
    expect(calculate(obj, '.')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: '8',
      next: null,
      operation: null,
    };
    const result = {
      total: '8',
      next: '8.',
      operation: null,
    };
    expect(calculate(obj, '.')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const result = {
      total: null,
      next: '0.',
      operation: null,
    };
    expect(calculate(obj, '.')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: 9,
      next: 8,
      operation: '-',
    };
    const result = {
      total: '1',
      next: null,
      operation: null,
    };
    expect(calculate(obj, '=')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: 9,
      next: 8,
      operation: '-',
    };
    const result = {
      total: '1',
      next: null,
      operation: null,
    };
    expect(calculate(obj, '=')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const result = {};
    expect(calculate(obj, '=')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: null,
      next: 8,
      operation: null,
    };
    const result = {
      total: null,
      next: '-8',
      operation: null,
    };
    expect(calculate(obj, '+/-')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: 8,
      next: null,
      operation: null,
    };
    const result = {
      total: '-8',
      next: null,
      operation: null,
    };
    expect(calculate(obj, '+/-')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: 8,
      next: null,
      operation: null,
    };
    const result = {
      total: 8,
      next: null,
      operation: 'x',
    };
    expect(calculate(obj, 'x')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: 8,
      next: null,
      operation: 'x',
    };
    const result = {
      total: 8,
      next: null,
      operation: '+',
    };
    expect(calculate(obj, '+')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: 3,
      next: 2,
      operation: 'x',
    };
    const result = {
      total: '6',
      next: null,
      operation: '+',
    };
    expect(calculate(obj, '+')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: 3,
      next: null,
      operation: null,
    };
    const result = {
      total: 3,
      next: null,
      operation: '+',
    };
    expect(calculate(obj, '+')).toStrictEqual(result);
  });

  it('should match result obj', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: null,
    };
    const result = {
      total: 3,
      next: null,
      operation: '-',
    };
    expect(calculate(obj, '-')).toStrictEqual(result);
  });
});
