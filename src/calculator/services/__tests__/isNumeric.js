import isNumeric from '../isNumeric'

describe('isNumeric', () => {

  test('is true', () => {
    const numeric = [2, '2', -2, '-2']
    numeric.map(item => {
      expect(isNumeric(item)).toBe(true)
    })
  })

  test('is false', () => {
    const notNumeric = ['', ' ', '-', 'a', true, false, undefined, null, Infinity]
    notNumeric.map(item => {
      expect(isNumeric(item)).toBe(false)
    })
  })
})