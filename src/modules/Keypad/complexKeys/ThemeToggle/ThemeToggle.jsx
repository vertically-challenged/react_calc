import React from 'react'
import './Toggle.scss'

export default function ThemeToggle({onClick}) {
  return (
    <button onClick={onClick} className='theme-toggle'>
      <div></div>
    </button>
  )
}
