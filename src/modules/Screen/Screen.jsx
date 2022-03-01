import React, { useRef, useEffect, useState } from 'react';
import Input from '../common/Input/Input'
import './Screen.scss'

const onChangeHandlerInput = (event, setExpression, inputRef) => {
  event.preventDefault()
  setExpression(event.target.value)
  console.log(inputRef)
}

const Screen = ({expression, setExpression, result}) => {
  const inputRef = useRef(null)
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    // console.log(!isNaN(inputRef.current.value));
    if (inputRef.current.value == '-' || !isNaN(inputRef.current.value)) {
      setShowAnswer(false)
    } else {
      setShowAnswer(true)
    } 
  })

  return (
    <div className='screen'>
      <Input inputRef={inputRef} className='screen__expression' value={expression} onChange={(event) => {onChangeHandlerInput(event, setExpression, inputRef)}}/>
      {showAnswer && <span className='screen__result'>{result}</span>}
      {showAnswer || <span className='screen__result'/>}
    </div>
  );
}

export default Screen;
