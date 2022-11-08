import { useState } from 'react'
import { getApiUrl } from '../../utils/config'
export default function Form () {
  const [searchTerm, setSearchTerm] = useState('')

  const onSearchHandler = (e) => {
    e.preventDefault()
    console.log(searchTerm)
  }

  return (
    <>
      <div>
        <form className='d-flex'>
          <input
            className='form-control me-sm-2'
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value) }}
          />
          <button
            className='btn btn-secondary my-2 my-sm-0'
            type='submit'
            onClick={onSearchHandler}
          >
            Search
          </button>
        </form>
      </div>
    </>
  )
}
