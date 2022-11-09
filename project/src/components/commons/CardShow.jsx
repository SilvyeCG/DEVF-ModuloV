import React from 'react'

const CardShow = ({ ...args }) => {
  return (
    <div>
      <div>
        <img
          src={args.show.image.original}
          className='card-img-top'
          id='imageResults'
          alt=''
          lazy=''
        />
      </div>
    </div>
  )
}

export default CardShow
