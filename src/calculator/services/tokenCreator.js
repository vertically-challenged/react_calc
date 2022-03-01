import isNumeric from './isNumeric'

export default function tokenCreator(string) {
  let token = []
  let currentNumber = ''

  // console.log('string: ', string)
  string.split('').forEach((char) => {
    if (isNumeric(char) || (char == '.')) {
      currentNumber = currentNumber + char
    } else if ((char == '-') && (currentNumber == '') &&((token.length == 0) || (token[token.length-1] == '('))) {
      token.push('0')
      token.push(char)
    } else if (char == '%') {
      if (currentNumber != '') token.push(currentNumber)
      currentNumber = token[token.length - 3] * (token.pop()/100)
    } else {
      if ((char != '(') && (currentNumber != '')) token.push(currentNumber)
      token.push(char)
      currentNumber = ''
    }
  })

  if (currentNumber != '') token.push(currentNumber)
  
  // console.log('token: ', token)
  return token
}