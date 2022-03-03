import tokenCreator from './services/tokenCreator'
import isNumeric from './services/isNumeric'
import operationPriorities from './operationPriorities'
import operationsList from './operationsList'

export default function calculator(mathExpString) {
  const numbers = []
  const operations = []
  const token = tokenCreator(mathExpString)

  try {
    token.forEach((item) => {

      console.log('numbers: ', numbers)
      console.log('operations', operations)
      console.log('token', token)
  
      if (isNumeric(item)) {
        numbers.push(item)
        if ((numbers.length > 2) && (operations[operations.length-1] != '(')) {
          numbers.push(operationsList[operations[operations.length-1]](numbers.pop(), numbers.pop()))
          operations.pop()
        }
      } else {
        if (operations.length == 0) { 
          operations.push(item) 
        } else if (item != ')' && operationPriorities[`${item}`] > operationPriorities[operations[operations.length - 1]]) {
          operations.push(item)
        } else {
          if (item == ')') {
            while (operations[operations.length-1] && operations[operations.length-1] != '(') {
              numbers.push(operationsList[operations[operations.length-1]](numbers.pop(), numbers.pop()))
              operations.pop()
            }
            operations.pop()
          }
          while (operations[operations.length-1] && (operations.length > 0) && (operationPriorities[`${item}`] <= operationPriorities[operations[operations.length - 1]])) {
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
      if (numbers[0] == Infinity) return
      return {
        result: numbers[0], 
        token
      }
    }
  } catch (error) {
    console.log(error)
  }
  return
}