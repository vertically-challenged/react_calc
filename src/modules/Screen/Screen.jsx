import React, { useRef, useEffect, useState } from 'react';
import Input from '../common/Input/Input'
import './Screen.scss'

const onChangeHandlerInput = (event, setExpression) => {
  event.preventDefault()
  setExpression(event.target.value)
}

const Screen = ({expression, setExpression, result, token}) => {
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    if (token && isNaN(token[token.length - 1])) {
      setShowAnswer(false)
      if (token[token.length - 1] == ')') setShowAnswer(true)
    } else {
      setShowAnswer(true)
      if (token?.length < 3) setShowAnswer(false)
    } 
  })

  return (
    <div className='screen'>
      <Input className='screen__expression' value={expression} onChange={(event) => {onChangeHandlerInput(event, setExpression)}}/>
      {showAnswer && <span className='screen__result'>{result}</span>}
      {showAnswer || <span className='screen__result'/>}
    </div>
  );
}

export default Screen;
