import { useState, useEffect } from 'react'
import axios from 'axios'
import Logo from './Components/Commons/Logo'
import Navbar from './Components/Commons/Navbar'
import Form from './Components/Form'
import CardShow from './Components/Commons/CardShow'

function App () {

  const [shows, setShows] = useState([])
  const [query, setQuery] = useState('')

  const getShowsQuery = async () => {
    const response = await axios(` https://api.tvmaze.com/search/shows?q=${query}`)
    console.log(response.data)
    setShows(response.data)
  }

  useEffect(() => {
    getShowsQuery()
  }, [query])
  return (
    <>
      <div className='header'>
        <Navbar />
        <Logo />
      </div>
      <Form getQuery={(q) => setQuery(q)} />
      <CardShow shows={shows} />
    </>
  )
}

export default App
