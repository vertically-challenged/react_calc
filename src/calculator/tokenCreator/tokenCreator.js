function  isNumeric(char) {
  return !isNaN(char)
}

export default function tokenCreator(string) {
  let token = []
  let currentNumber = ''

  string.split('').forEach((char) => {
    console.log('char: ', char)
    if (isNumeric(char)) {
      currentNumber = currentNumber + char
    } else {
      token.push(currentNumber)
      token.push(char)
      currentNumber = ''
    }
  })

  if (currentNumber != '') token.push(currentNumber)
  
  return token
}