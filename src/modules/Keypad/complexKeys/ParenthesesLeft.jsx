import React from 'react';
import Button from '../../common/Button/Button'
import calculator from '../../../calculator/calculator'
import isNumeric from '../../../calculator/services/isNumeric';

const onClickHandler = (setExpression, expression) => {
  const token = calculator(expression)?.token
  
  if (token && isNumeric(token[token.length - 1])) {
    setExpression(expression + '*(')
  } else {
    setExpression(expression + '(')
  }
}

const ParenthesesLeft = ({setExpression, expression, type}) => {
  return (
    <Button type={type} onClick={()=> {onClickHandler(setExpression, expression)}}>{'('}</Button>
  );
}

export default ParenthesesLeft;
