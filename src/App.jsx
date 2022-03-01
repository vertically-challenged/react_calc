import { useEffect, useState } from 'react'
import './App.scss'
import calculator from './calculator/calculator'
import Keypad from './modules/Keypad/Keypad'
import Screen from './modules/Screen/Screen'

function App() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState(calculator(expression)?.result)

  useEffect(() => {
    setResult(calculator(expression)?.result)
  })

  return (
    <div className="App">
      <div className="container">
        <div className='calculator'>
          <Screen expression={expression} setExpression={setExpression} result={result}/>
          <Keypad expression={expression} setExpression={setExpression} result={result}/>
        </div>
        {console.log(calculator(expression))}
      </div>
    </div>
  );
}

export default App
