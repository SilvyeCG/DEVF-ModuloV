import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";
import { useState } from 'react'

/**
 * The App function returns a div with a Header component, an AddTask component, and a Tasks component
 */
function App() {
  
  const [showForm, setShowForm] = useState(false) 
  
  const [tasks, setTasks] = useState([
    {
       id: 1,
       text: 'Go to the cinema',
       date: 'February 2nd, 2022',
       done: true,
     },
     {
       id: 2,
       text: 'Buy groceries',
       date: 'February 10th, 2022',
       done: false,
     },
     {
       id: 3,
       text: 'Create app in React',
       date: 'February 11th, 2022',
       done: false,
     }
  ]);

 
  /**
   * DELETE TASK
   * If the task id is not equal to the task id that was clicked, then keep it in the array.
   */
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  
  /**
   * PUT A GREEN TOGGLE MARK IF A TASK IS DONE
   * If the task's id is equal to the taskId, then return a new object with the same properties as the
   * task, but with the done property flipped. Otherwise, return the task as is.
   */
  const toggleTask = (taskId) => {
    
    setTasks(tasks.map(task => task.id === taskId ? {...task, done: !task.done} : task))
  }

  
  /**
   * ADD NEW TASK WITHIN THE FORM 
   * AddTask takes in a taskInfo object and returns a new task object with an id property added to it,
   * and then adds that new task object to the tasks array.
   */
  const addTask = (taskInfo) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...taskInfo }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd = {() => setShowForm(!showForm)} showForm ={showForm}/>
      {showForm && <AddTask onAdd={addTask} />}
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle ={toggleTask}/> : 'No pending task to be shown'}
    </div>
  )
}




export default App
