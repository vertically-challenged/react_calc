import multiplication from '../multiplication'

describe('Multiplication', () => {
  test('Integer multiplication', () => {
    expect(multiplication(2, 4)).toBe(8)
    expect(multiplication(2, -2)).toBe(-4)
    expect(multiplication(-2, 2)).toBe(-4)
    expect(multiplication(-2, -4)).toBe(8)
  })

  test('multiplication by 0', () => {
    expect(multiplication(0, 4)).toBe(0)
  })

  test('Real number multiplication', () => {
    expect(multiplication(0.2, 0.1)).toBe(0.02)
    expect(multiplication(-0.2, 0.1)).toBe(-0.02)
    expect(multiplication(0.2, -0.1)).toBe(-0.02)
    expect(multiplication(-0.2, -0.1)).toBe(0.02)
  })
})