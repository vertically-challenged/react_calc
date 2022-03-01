import React from 'react';
import Button from '../common/Button/Button'
import Equality from './complexKeys/Equality'
import './Keypad.scss'

const Keypad = ({expression, setExpression, result}) => {
  return (
    <div className='keypad'>
      <div className='keypad__line'>
        <Button onClick={() => setExpression('')} >{'C'}</Button>
        <Button >{'( )'}</Button>
        <Button onClick={() => setExpression(expression + '%')}>{'%'}</Button>
        <Button onClick={() => setExpression(expression + '/')}>{'/'}</Button>
      </div>
      <div className='keypad__line'>
        <Button onClick={() => setExpression(expression + '7')}>{'7'}</Button>
        <Button onClick={() => setExpression(expression + '8')}>{'8'}</Button>
        <Button onClick={() => setExpression(expression + '9')}>{'9'}</Button>
        <Button onClick={() => setExpression(expression + '*')}>{'x'}</Button>
      </div>
      <div className='keypad__line'>
        <Button onClick={() => setExpression(expression + '4')}>{'4'}</Button>
        <Button onClick={() => setExpression(expression + '5')}>{'5'}</Button>
        <Button onClick={() => setExpression(expression + '6')}>{'6'}</Button>
        <Button onClick={() => setExpression(expression + '-')}>{'-'}</Button>
      </div>
      <div className='keypad__line'>
        <Button onClick={() => setExpression(expression + '1')}>{'1'}</Button>
        <Button onClick={() => setExpression(expression + '2')}>{'2'}</Button>
        <Button onClick={() => setExpression(expression + '3')}>{'3'}</Button>
        <Button onClick={() => setExpression(expression + '+')}>{'+'}</Button>
      </div>
      <div className='keypad__line'>
        <Button >{'#'}</Button>
        <Button onClick={() => setExpression(expression + '0')}>{'0'}</Button>
        <Button onClick={() => setExpression(expression + '.')}>{'.'}</Button>
        <Equality setExpression={setExpression} result={result}/>
      </div>
    </div>
  );
}

export default Keypad;
