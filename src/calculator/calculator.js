import tokenCreator from './tokenCreator/tokenCreator'

export default function calculator(mathExpString) {
  return tokenCreator(mathExpString)
}