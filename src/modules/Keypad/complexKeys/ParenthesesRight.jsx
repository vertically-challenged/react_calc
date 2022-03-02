import React from 'react';
import Button from '../../common/Button/Button'
import calculator from '../../../calculator/calculator'
import isNumeric from '../../../calculator/services/isNumeric';

const onClickHandler = (setExpression, expression) => {
    setExpression(expression + ')')
}

const Parentheses = ({setExpression, expression, type}) => {
  return (
    <Button type={type} onClick={()=> {onClickHandler(setExpression, expression)}}>{')'}</Button>
  );
}

export default Parentheses;
