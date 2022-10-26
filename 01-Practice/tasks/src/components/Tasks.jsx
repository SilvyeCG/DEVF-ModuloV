import React from 'react'
import Task from './Task'

/* A function that takes in tasks, onDelete, and onToggle as props. It then maps through the tasks and
returns a Task component for each task. */
const Tasks = ({tasks, onDelete, onToggle}) => {
  
  return (
    <>
    {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
    ))}
    </>
  )
}

export default Tasks