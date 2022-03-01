import isNumeric from './isNumeric'

// Определение отрицательных чисел добавишь сюда, но сначала разберись со скобками

export default function tokenCreator(string) {
  let token = []
  let currentNumber = ''

  console.log('string: ', string)
  string.split('').forEach((char) => {
    if (isNumeric(char) || (char == '.')) {
      currentNumber = currentNumber + char
    } else if ((char == '-') && ((token.length == 0) || (token[token.length-1] == '('))) {
      token.push('0')
      token.push(char)
    } else {
      if ((char != '(') && (currentNumber != '')) token.push(currentNumber)
      token.push(char)
      currentNumber = ''
    }
  })

  if (currentNumber != '') token.push(currentNumber)
  
  console.log('token: ', token)
  return token
}