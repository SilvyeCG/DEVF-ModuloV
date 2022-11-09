import React from 'react'

const CardResults = ({ show }) => {
  return (
    <div className='Card'>
      <div>
        <h1>{show.show.image.medium}</h1>
        <h3>{show.show.country}</h3>
        {/* <img
          src={show.show.image}
          className='card-img-top'
          id='imageResults'
          alt=''
          lazy=''
        /> */}
      </div>
    </div>
  )
}

export default CardResults
