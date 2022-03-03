import tokenCreator from './services/tokenCreator'
import isNumeric from './services/isNumeric'
import operationPriorities from './operationPriorities'
import operationsList from './operationsList'

export default function calculator(mathExpString) {
  function calculate () {
    numbers.push(operationsList[operations[operations.length-1]](numbers.pop(), numbers.pop()))
    operations.pop()
  }

  const numbers = []
  const operations = []
  const token = tokenCreator(mathExpString)

  token.forEach((item) => {

    const lastOperation = operations[operations.length - 1]

    if (isNumeric(item)) {
      numbers.push(item)
      if ((numbers.length > 2)) {
        calculate()
      }
    } else {
      if (operations.length == 0) { 
        operations.push(item) 
      } else if (operationPriorities[`${item}`] > operationPriorities[lastOperation]) {
        operations.push(item)
      } else {
        if (item == ')') {
          while (lastOperation != '(') {
            calculate()
          }
          operations.pop()
        }
        while ((operations.length > 0) && (operationPriorities[`${item}`] <= operationPriorities[lastOperation])) {
          calculate()
        }
        operations.push(item)
        if (item == ')') operations.pop()
      }
    }
  })

  if ((operations.length == 1) && (numbers.length == 2)) {
    calculate()
  }

  if (numbers.length == 1) {
    return {
      result: numbers[0], 
      token
    }
  }
  return
}