import addition from '../addition'

describe('Addition', () => {
  test('Integer addition', () => {
    expect(addition(2, 2)).toBe(4)
    expect(addition(2, -2)).toBe(0)
    expect(addition(-2, 2)).toBe(0)
    expect(addition(-2, -2)).toBe(-4)
  })

  test('Real number addition', () => {
    expect(addition(0.1, 0.2)).toBe(0.3)
    expect(addition(-0.1, 0.2)).toBe(0.1)
    expect(addition(0.1, -0.2)).toBe(-0.1)
    expect(addition(-0.1, -0.2)).toBe(-0.3)
  })
})