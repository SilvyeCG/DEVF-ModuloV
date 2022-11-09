import { useState } from 'react'

const Form = ({ getQuery }) => {
  const { query, setQuery } = useState()

  const handleChange = (getData) => {
    setQuery(getData)
    query(getData)
  }

  return (
    <div className='formSearch'>
      <form className='d-flex' abineguid='1B78BAA4F3D74319AA193B30F386BD92'>
        <input
          className='form-control me-sm-2'
          type='text'
          placeholder='Search'
        />
        <button className='btn btn-danger my-2 my-sm-0' type='submit'>
          Search
        </button>
      </form>
    </div>
  )
}

export default Form
