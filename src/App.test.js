import App from './App';

describe('sum', () => {
  test('Name test-case', () => {
    expect(((a, b) => {return a + b})(0.1, 0.2)).toBeCloseTo(0.3)
  });
});

