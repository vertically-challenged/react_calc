import React from 'react';
import Button from '../common/Button/Button'
import Equality from './complexKeys/Equality'
import ParenthesesLeft from './complexKeys/ParenthesesLeft'
import ParenthesesRight from './complexKeys/ParenthesesRight';
import ThemeToggle from './complexKeys/ThemeToggle/ThemeToggle'
import './Keypad.scss'

const Keypad = ({expression, setExpression, result, onThemeToggleHandler}) => {
  return (
    <div className='keypad'>
      <div className='keypad__line keypad__first-line'>
        <Button type={'default-button--function'} onClick={() => setExpression('')} >{'C'}</Button>
        <ThemeToggle onClick={onThemeToggleHandler}/>
      </div>
      <div className='keypad__line'>
        <ParenthesesLeft type={'default-button--function'} setExpression={setExpression} expression={expression}/>
        <ParenthesesRight type={'default-button--function'} setExpression={setExpression} expression={expression}/>
        <Button type={'default-button--function'} onClick={() => setExpression(expression + '%')}>{'%'}</Button>
        <Button type={'default-button--function'} onClick={() => setExpression(expression + '/')}>{'/'}</Button>
      </div>
      <div className='keypad__line'>
        <Button type={'default-button--number'} onClick={() => setExpression(expression + '7')}>{'7'}</Button>
        <Button type={'default-button--number'} onClick={() => setExpression(expression + '8')}>{'8'}</Button>
        <Button type={'default-button--number'} onClick={() => setExpression(expression + '9')}>{'9'}</Button>
        <Button type={'default-button--function'} onClick={() => setExpression(expression + '*')}>{'x'}</Button>
      </div>
      <div className='keypad__line'>
        <Button type={'default-button--number'} onClick={() => setExpression(expression + '4')}>{'4'}</Button>
        <Button type={'default-button--number'}onClick={() => setExpression(expression + '5')}>{'5'}</Button>
        <Button type={'default-button--number'}onClick={() => setExpression(expression + '6')}>{'6'}</Button>
        <Button type={'default-button--function'} onClick={() => setExpression(expression + '-')}>{'–'}</Button>
      </div>
      <div className='keypad__line'>
        <Button type={'default-button--number'} onClick={() => setExpression(expression + '1')}>{'1'}</Button>
        <Button type={'default-button--number'} onClick={() => setExpression(expression + '2')}>{'2'}</Button>
        <Button type={'default-button--number'} onClick={() => setExpression(expression + '3')}>{'3'}</Button>
        <Button type={'default-button--function'} onClick={() => setExpression(expression + '+')}>{'+'}</Button>
      </div>
      <div className='keypad__line'>
        <Button type={'default-button--function'} onClick={() => setExpression(expression + '^')}>{'^'}</Button>
        <Button type={'default-button--number'} onClick={() => setExpression(expression + '0')}>{'0'}</Button>
        <Button type={'default-button--function'} onClick={() => setExpression(expression + '.')}>{'.'}</Button>
        <Equality type={'default-button--function'} setExpression={setExpression} result={result}/>
      </div>
    </div>
  );
}

export default Keypad;
