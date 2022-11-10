import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Characters = ({id}) => {
  const apiUrl = `https://api.tvmaze.com/shows/${id}/cast`

  const [characters, setCharacter] = useState([])

  const getShowsQuery = async () => {
    const response = await axios(apiUrl)
    if (response.status === 200) {
      setCharacter(response.data)
    }
  }

  useEffect(() => {
    getShowsQuery()
  }, [])

  return (
    <div>
      {
        characters.map((character, index) => (
          <div key={index} className='col-12 col-md-12 col-lg-12'>
            <div className='card'>
              {/* <img src={character.image.original} className='card-img-top' alt={character.person.name} /> */}
              <div className='card-body'>
                <h5 className='card-title'>{character.person.name}</h5>
                <p className='card-text'><b>As:</b> {character.character.name}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Characters
