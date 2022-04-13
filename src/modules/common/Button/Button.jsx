import React from 'react';
import './Button.scss'

const Button = ({children, onClick, type}) => {
  return (
    <button className={`default-button ${type}`} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}

export default Button;
