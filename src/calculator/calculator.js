import tokenCreator from './services/tokenCreator'
import isNumeric from './services/isNumeric'
import operationPriorities from './operationPriorities'
import operationsList from './operationsList'

export default function calculator(mathExpString) {
  const numbers = []
  const operations = []
  const token = tokenCreator(mathExpString)

  token.forEach((item) => {

    if (isNumeric(item)) {
      numbers.push(item)
    } else {
      if (operations.length == 0) { 
        operations.push(item) 
      } else if (operationPriorities[`${item}`] > operationPriorities[operations[operations.length - 1]]) {
        operations.push(item)
      } else {
        if (item == ')') {
          while (operations[operations.length-1] != '(') {
            numbers.push(operationsList[operations[operations.length-1]](numbers.pop(), numbers.pop()))
            operations.pop()
          }
          operations.pop()
        }
        while ((operations.length > 0) && (operations.length > 0) && (operationPriorities[`${item}`] <= operationPriorities[operations[operations.length - 1]])) {
          numbers.push(operationsList[operations[operations.length-1]](numbers.pop(), numbers.pop()))
          operations.pop()
        }
        operations.push(item)
        if (item == ')') operations.pop()
      }
    }
  })

  if ((operations.length == 1) && (numbers.length == 2)) {
    numbers.push(operationsList[operations[operations.length-1]](numbers.pop(), numbers.pop()))
    operations.pop()
  }

  if (numbers.length == 1) {
    return {
      result: numbers[0],
      numbers, 
      operations
    }
  }
  return
}