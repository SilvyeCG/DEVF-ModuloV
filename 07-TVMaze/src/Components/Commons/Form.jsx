import { useState } from 'react'

const Form = ({ getQuery }) => {
  const [querySearch, setQuerySearch] = useState('')

  const handleChange = (e) => { //CHANGE: getData as param => getQuery(getData)
    e.preventDefault()
    // console.log(querySearch)
    // setQuerySearch(getData)
    getQuery(querySearch)
  }

  return (
    <div className='formSearch' onSubmit={handleChange}>
      <form className='d-flex' abineguid='1B78BAA4F3D74319AA193B30F386BD92'>
        <input
          className='form-control me-sm-2 fs-4 mt-5'
          type='text'
          placeholder='Search...'
          value={querySearch}
          onChange={(e) => setQuerySearch(e.target.value)}
        />
        <button className='btn btn-secondary my-2 my-sm-0' type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Form
