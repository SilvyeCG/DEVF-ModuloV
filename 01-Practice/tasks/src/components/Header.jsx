import React from 'react'
import Button from './Button'

/**
 * Header is a function that takes in an object with two properties, onAdd and showForm, and returns a
 * header element with a h1 element and a Button component.
 * @returns A header component with a h1 and a button.
 */
const Header = ({ onAdd, showForm }) => {
    
  return (
    <header className='header'> 
        <h1>Tasks</h1>
        <Button text={showForm ? 'Close' : 'Add'} color={showForm ? 'red' : 'green'} onClick={onAdd} />
    </header>
  )
}

export default Header