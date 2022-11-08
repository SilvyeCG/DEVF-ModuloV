import Carousel from '../components/commons/Carousel'
import Navbar from '../components/commons/Navbar'

function Series () {
  return (
    <>
      <div className='Series'>
        <Navbar />
      </div>
      <div className="row">
        <div className="col text-center mt-5">
          <h2>WELCOME TO THE SHOW SEARCHING TOOL</h2>
        </div>
      </div>
      <div className="row pt-4">
        <div className="col">
          <Carousel />
        </div>
      </div>
    </>
  )
}

export default Series
