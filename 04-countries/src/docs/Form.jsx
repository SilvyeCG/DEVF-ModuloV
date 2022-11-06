import { useState } from 'react'

export default function Form () {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setValue(event.target.value)
  }

  return (
    <>
      <section className='container py-5'>
        <form>
          <input onChange={handleSubmit} className='form-control' type='search' placeholder='Search...' />
        </form>
        <h2 className='text-white'>{value}</h2>
      </section>
    </>
  )
}
