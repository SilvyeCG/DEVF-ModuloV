import { useState } from 'react'

const Form = ({ getQuery }) => {
  const [querySearch, setQuerySearch] = useState('')

  const handleChange = (getData) => {
    console.log(getData)
    setQuerySearch(getData)
    getQuery(getData)
  }

  return (
    <div className='formSearch'>
      <form className='d-flex' abineguid='1B78BAA4F3D74319AA193B30F386BD92'>
        <input
          className='form-control me-sm-2 fs-3'
          type='text'
          placeholder='Search...'
          value={querySearch}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Form
