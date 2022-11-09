import { useState } from 'react'

const Form = ({ getQuery }) => {
  const { query: querySearch, setQuery: setQuerySearch } = useState()

  const handleChange = (getData) => {
    console.log("Here", getData)
    setQuerySearch(getData)
    getQuery(getData)
  }

  return (
    <div className='formSearch'>
      <form className='d-flex' abineguid='1B78BAA4F3D74319AA193B30F386BD92'>
        <input
          className='form-control me-sm-2'
          type='text'
          placeholder='Search...'
          value={querySearch}
          onChange={(e) => handleChange(e.target.value)}
        />
        {/* <button className='btn btn-danger my-2 my-sm-0' type='submit'>
          Search
        </button> */}
      </form>
    </div>
  )
}

export default Form
