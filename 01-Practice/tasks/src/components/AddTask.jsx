import React from 'react'
import { useState } from 'react'
const AddTask = ({ onAdd }) => {

    const [text, setText] = useState("")
    const [date, setDate] = useState("")
    const [done, setDone] = useState(false)

    /**
     * The function is called onSubmit, it takes an event as an argument, it prevents the default
     * action of the event, it checks if the text and date are empty, if they are it alerts the user,
     * if they aren't it calls the onAdd function and passes it the text, date and done values, it then
     * sets the text, date and done values to empty strings and false respectively.
     */
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('You missed the task description')
            return
        }
        if(!date){
            alert('You missed the date')
            return
        }
        
        onAdd({ text, date, done })
        setText('')
        setDate('')
        setDone(false)

    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task: </label>
            <input type="text" placeholder='Task description'  
                value={text}
                onChange={(e) =>setText(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Date: </label>
            <input type="text" placeholder='Date'  
                value={date}
                onChange={(e) =>setDate(e.target.value)}
            />
        </div>
        <div className='form-control form-control-check'>
            <label>Is it done?</label>
            <input type="checkbox"  
                checked={done}
                value={done}
                onChange={(e) => setDone(e.currentTarget.checked)}
            />
        </div>
        <input type="submit" value='Add new task' className='btn btn-block' />
    </form>
  )
}

export default AddTask