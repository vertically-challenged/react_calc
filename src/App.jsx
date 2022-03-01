import './App.scss'
import calculator from './calculator/calculator'

function App() {
  return (
    <div className="App">
      <div className="container">
        {console.log(calculator('(0.15 + 0.21)'))}
      </div>
    </div>
  );
}

export default App
