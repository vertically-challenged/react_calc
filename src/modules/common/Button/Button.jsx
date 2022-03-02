import React from 'react';
import './Button.scss'

const Button = ({children, onClick, type}) => {
  return (
    <button className={`default-button ${type}`} onClick={onClick}>{children}</button>
  );
}

export default Button;
