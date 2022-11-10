import React from 'react'
import Navbar from '../Layouts/Navbar'
// col-12 col-md-6 col-lg-4
const Show = () => {
  return (
    <>
      <div className='header mb-5'>
        <Navbar />
      </div>
      <div className='container'>
        <section className='row'>
          <div className='col-12 col-md-4 col-lg-4'>
            <img src='' alt='ShowImage' srcSet='' />
          </div>
          <div className='col-12 col-md-8 col-lg-8'>
            <div className='row'>
              <div className='col'>
                <h1 className='mb-4'>Name: </h1>
                <h5 className='mb-4'>Status: </h5>
                <h5 className='mb-4'>Summary: </h5>
                <h5 className='mb-4'>Website: </h5>
              </div>
            </div>
          </div>
        </section>
        <section className='row mb-5'>
          <div className='col-12 col-md-4 col-lg-4'>
            <div className='row mb-5'>
              <div className='col-12 col-md-4 col-lg-4 text-center'>
                <img src='' alt='personPhoto' srcSet='' />
              </div>
              <div className='col-12 col-md-8 col-lg-8 text-center'>
                <h5>Character name</h5>
                <p>Name</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Show
