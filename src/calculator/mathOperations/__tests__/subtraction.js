import subtraction from '../subtraction'

describe('subtraction', () => {
  test('Integer subtraction', () => {
    expect(subtraction(2, 4)).toBe(2)
    expect(subtraction(2, -2)).toBe(-4)
    expect(subtraction(-2, 2)).toBe(4)
    expect(subtraction(-2, -4)).toBe(-2)
  })

  test('Real number subtraction', () => {
    expect(subtraction(0.3, 0.1)).toBe(-0.2)
    expect(subtraction(-0.2, 0.1)).toBe(0.3)
    expect(subtraction(0.2, -0.1)).toBe(-0.3)
    expect(subtraction(-0.2, -0.1)).toBe(0.1)
  })
})