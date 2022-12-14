import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Logo from './Components/Commons/Logo'
import Navbar from './Layouts/Navbar'
import Form from './Components/Commons/Form'

function App () {
  const [shows, setShows] = useState([])
  const [query, setQuery] = useState('')

  const getShowsQuery = async () => {
    const response = await axios(`https://api.tvmaze.com/search/shows?q=${query}`)
    if (response.status === 200) {
      setShows(response.data)
    }
  }

  useEffect(() => {
    getShowsQuery()
  }, [query])

  console.log('here', shows)
  return (
    <>
      <div className='header'>
        <Navbar />
        <Logo />
      </div>
      <Form getQuery={(q) => setQuery(q)} />
      <div className='container'>
        <div className='row gy-4'>
          {shows.map((show, index) => (
            <div key={index} className='col-12 col-md-6 col-lg-4'>
              <Link className='card mb-3' id='showsResultsImg'>
                <img src={show.show.image.original} className='card-img-top' alt={show.show.name} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
