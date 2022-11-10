import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Characters from '../Components/Commons/Characters'
import Navbar from '../Layouts/Navbar'
// col-12 col-md-6 col-lg-4
const Show = () => {
  const { id } = useParams()
  const [show, setShow] = useState([])

  const apiShow = `https://api.tvmaze.com/shows/${id}`

  const getShow = async () => {
    const response = await axios(apiShow)
    if (response.status === 200) {
      setShow(response.data)
    } else {
      return <Navigate to='/404' />
    }
  }

  useEffect(() => {
    getShow()
  }, [])

  return (
    <>
      <div className='header mb-5'>
        <Navbar />
      </div>
      <div className='container'>
        <section className='row'>
          <div className='col-12 col-md-4 col-lg-4'>
            {/* <img id='imgShow' src={show.image.original} alt={show.name} srcSet='' /> */}
          </div>
          <div className='col-12 col-md-8 col-lg-8'>
            <div className='row'>
              <div className='col'>
                <h1 className='mb-4'><b className='text-danger'>Name:</b> {show.name} </h1>
                <h5 className='mb-4'><b className='fs-4 text-danger'>Status:</b> {show.status} </h5>
                <h5 className='mb-4'><b className='fs-4 text-danger'>Summary:</b> {show.summary} </h5>
                <h5 className='mb-4'><b className='fs-4 text-danger'>Website:</b> {show.officialSite} </h5>
              </div>
            </div>
          </div>
        </section>
        <section className='mt-5'>
          <div className='container'>
            <div className='row'>
              <div className='col me-3'>
                <h1 className='fs-2 text-danger mb-4'>Characters</h1>
                <Characters id={id} />
              </div>
              <div className='col ms-3'>
                <h1 className='fs-2 text-danger mb-4'>Seasons</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Show
