const CardShow = ({ ...args }) => {
  return (
    <div>
      <div>
        <h1>{args.show.name}</h1>
        {/* <img
          src={shows.show.image.original}
          className='card-img-top'
          id='imageResults'
          alt=''
          lazy=''
        /> */}
      </div>
    </div>
  )
}

export default CardShow
