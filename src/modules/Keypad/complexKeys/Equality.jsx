import React from 'react'
import Button from '../../common/Button/Button';

const onClickHandler = (setExpression, result) => {
  setExpression(`${result}`)
}

const Equality = ({setExpression, result, type}) => {
  return (
    <Button type={type} onClick={()=> {onClickHandler(setExpression, result)}}>{'='}</Button>
  );
}

export default Equality;
