import React from 'react'
import Button from '../../common/Button/Button';

const onClickHandler = (setExpression, result) => {
  setExpression(`${result}`)
}

const Equality = ({setExpression, result}) => {
  return (
    <Button onClick={()=> {onClickHandler(setExpression, result)}}>{'='}</Button>
  );
}

export default Equality;
