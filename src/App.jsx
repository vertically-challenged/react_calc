import { useEffect, useState } from 'react'
import './App.scss'
import calculator from './calculator/calculator'
import Keypad from './modules/Keypad/Keypad'
import Screen from './modules/Screen/Screen'

function App() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState(calculator(expression)?.result)
  const [token, setToken] = useState(calculator(expression)?.token)

  useEffect(() => {
    setResult(calculator(expression)?.result)
    setToken(calculator(expression)?.token)
  }, [expression])

  return (
    <div className="App theme-dark">
      <div className="container">
        <div className='calculator'>
          <Screen expression={expression} setExpression={setExpression} result={result} token={token}/>
          <Keypad expression={expression} setExpression={setExpression} result={result}/>
        </div>
        {console.log(calculator(expression))}
      </div>
    </div>
  );
}

export default App
