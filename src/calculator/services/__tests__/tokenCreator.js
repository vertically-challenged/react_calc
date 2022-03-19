import tokenCreator from '../tokenCreator'

test('Token', () => {
  const validInput = '-2+(2+2)-2*(3/3)+2^(-2)'
  const validToken = ['0', '-', '2', '+', '(', '2', '+', '2', ')', '-', '2', '*', '(', '3', '/', '3', ')', '+', '2', '^', '(', '0', '-', '2', ')']
  expect(tokenCreator(validInput)).toEqual(validToken)
})