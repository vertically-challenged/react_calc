import React from 'react';
import Button from '../../common/Button/Button'
import isNumeric from '../../../calculator/services/isNumeric';

const onClickHandler = (setExpression, expression, token) => {
  
  if (token && isNumeric(token[token.length - 1])) {
    console.log('token[token.length - 1]: ', token[token.length - 1])
    setExpression(expression + '*(')
  } else {
    setExpression(expression + '(')
  }
}

const ParenthesesLeft = ({setExpression, expression, type, token}) => {
  return (
    <Button type={type} onClick={()=> {onClickHandler(setExpression, expression, token)}}>{'('}</Button>
  );
}

export default ParenthesesLeft;
