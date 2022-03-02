import { useEffect, useState } from 'react'
import './App.scss'
import calculator from './calculator/calculator'
import Keypad from './modules/Keypad/Keypad'
import Screen from './modules/Screen/Screen'

const onThemeToggleHandler = (theme, setTheme) => {
  setTheme(theme == 'theme-dark' ? 'theme-light' : 'theme-dark')
}

function App() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState(calculator(expression)?.result)
  const [token, setToken] = useState(calculator(expression)?.token)
  const [theme, setTheme] = useState('theme-dark')

  useEffect(() => {
    setResult(calculator(expression)?.result)
    setToken(calculator(expression)?.token)
  }, [expression])

  useEffect(() => {
    document.querySelector('.App').classList.toggle(theme)
  }, [theme])

  return (
    <div className="App">
      <div className="container">
        <div className='calculator'>
          <Screen expression={expression} setExpression={setExpression} result={result} token={token}/>
          <Keypad expression={expression} setExpression={setExpression} result={result} onThemeToggleHandler={() => {onThemeToggleHandler(theme, setTheme)}}/>
        </div>
      </div>
    </div>
  );
}

export default App
