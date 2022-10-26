import React from 'react'
import { FaTimes } from 'react-icons/fa'

/* A function that returns a div with a className, onDoubleClick, h3, and p. */
const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`tarea ${task.done ? 'terminada' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)} /> </h3>
        <p>{task.date}</p>
    </div>
  )
}

export default Task