import React from 'react'
import './Input.scss'

const Input = ({inputRef, className, value, onChange}) => {
  return (
    <input ref={inputRef} className={className} type="text" value={value} onChange={onChange}/>
  );
}

export default Input;
