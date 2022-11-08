import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Loading from './components/commons/Loading'
import Navbar from './components/commons/Navbar'

function Series () {
  const urlApi = `https://api.tvmaze.com/search/shows?q=csi`
  const [res, setRes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  const getData = async () => {
    try {
      const request = await fetch(urlApi)
      const response = await request.json()
      setRes(response)
    } catch (error) {
      setError(String(error))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(res)

  useEffect(() => {
    if (error !== '') toast.error(error)
  }, [error])

  if (loading) return <Loading />

  return (
    <>
      <div className='Series'>
        <Navbar />
      </div>
      <div className='container py-5'>
        <div className='row gy-4'>
          <h1>Results for {res[0].show.name}</h1>
          {res.map((result, index) => (
            <div key={index} className='col-12 col-md-6 col-lg-4'>
              <div>
                <img
                  src={result.show.image.original}
                  className='card-img-top'
                  id='imageResults'
                  alt=''
                  lazy=''
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Series
