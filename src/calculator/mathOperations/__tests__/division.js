import division from '../division'

describe('Division', () => {
  test('Integer division', () => {
    expect(division(2, 4)).toBe(2)
    expect(division(2, -2)).toBe(-1)
    expect(division(-2, 2)).toBe(-1)
    expect(division(-2, -4)).toBe(2)
  })

  test('division by 0', () => {
    expect(division(0, 4)).toBe(Infinity)
  })

  test('Real number division', () => {
    expect(division(0.2, 0.1)).toBe(0.5)
    expect(division(-0.2, 0.1)).toBe(-0.5)
    expect(division(0.2, -0.1)).toBe(-0.5)
    expect(division(-0.2, -0.1)).toBe(0.5)
  })
})