import calculator from '../calculator'

describe('Calculator', () => {
  test('Bracket calculations', () => {
    expect(calculator('(2*2)+2').result).toBe(6)
    expect(calculator('(-2*2)+2').result).toBe(-2)
    expect(calculator('-(2*2)+2').result).toBe(-2)
    expect(calculator('2+(2*2)').result).toBe(6)
    expect(calculator('2+(-2*2)').result).toBe(-2)
    expect(calculator('(2+2)*(2+2)').result).toBe(16)
    expect(calculator('(2+2)/(2+2)').result).toBe(1)
    expect(calculator('2^(-4)').result).toBe(0.0625)
    expect(calculator('2^(-(2^(2)))').result).toBe(0.0625)
    expect(calculator('2^(-2^2)').result).toBe(16)
    expect(calculator('2^((-2)^2)').result).toBe(16)
    expect(calculator('2^(2^(2))').result).toBe(16)
  })
})