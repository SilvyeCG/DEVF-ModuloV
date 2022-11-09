import React from 'react'
import Loading from '../../Layouts/Loading'
import CardShow from './CardShow'

const Shows = (waitingLoading, shows) => {
  // console.log(shows[0].show)
  return waitingLoading ? (
    <Loading />
  ) : (
    <div className='row gy-4'>
      {shows.map((result, index) => (
        <div key={index} className='col-12 col-md-6 col-lg-4'>
          <div>
            <h1>{result.show.name}</h1>
            {/* <img
          src={shows.show.image.original}
          className='card-img-top'
          id='imageResults'
          alt=''
          lazy=''
        /> */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Shows
