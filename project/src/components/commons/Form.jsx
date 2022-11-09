import { useState } from 'react'
import Config from '../../utils/Config'

export default function Form () {
  const [searchTerm, setSearchTerm] = useState('')

  const baseURL = 'https://api.tvmaze.com/search/shows?q='
  const handleChange = (e) => {
    e.preventDefault()
    const apiUrl = baseURL + searchTerm
    Config(apiUrl)
  }
 
  return (
    <>
      <div>
        <form className='d-flex' onSubmit={handleChange}>
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
          >
            Search
          </button>
        </form>
      </div>
    </>
  )
}
