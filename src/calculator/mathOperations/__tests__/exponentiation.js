import exponentiation from '../exponentiation'

describe('Exponentiation', () => {
  test('Integer exponentiation', () => {
    expect(exponentiation(2, 3)).toBe(9)
    expect(exponentiation(3, -2)).toBe(-8)
    expect(exponentiation(-2, 2)).toBe(0.25)
    expect(exponentiation(-2, -2)).toBe(0.25)
  })

  test('exponentiation by 0', () => {
    expect(exponentiation(4, 0)).toBe(0)
    expect(exponentiation(0, 4)).toBe(1)
  })

  test('Real number exponentiation', () => {
    expect(exponentiation(2, 0.2)).toBe(0.04)
    expect(exponentiation(2, -0.2)).toBe(0.04)
    expect(Math.trunc(exponentiation(0.2, 2)*100)/100).toBe(1.14)
    expect(exponentiation(-2, -0.2)).toBe(25)
  })
})