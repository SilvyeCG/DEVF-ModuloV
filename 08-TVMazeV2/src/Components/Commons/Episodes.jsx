import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Episodes = ({ idSeason }) => {
    console.log("idseason", idSeason)
  const [episodes, setEpisodes] = useState([])
  const apiEpisodes = `https://api.tvmaze.com/shows/${idSeason}/seasons`

  const getEpisodes = async () => {
    const response = await axios(apiEpisodes)
    if (response.status === 200) {
      setEpisodes(response.data)
    } else {
      return <Navigate to='/404' />
    }
  }

  useEffect(() => {
    getEpisodes()
  }, [])
  console.log("Episodes", episodes)
  return (
    <>
      <div>
        {
            episodes.map((episode, index) => (
              <div key={index}>
                <p className='fs-4 ms-3'><b className='fs-4 me-5'>{episode.number}</b> {episode.name}</p>
              </div>
            ))
        }
      </div>

    </>
  )
}

export default Episodes
