import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import CardShow from '../components/commons/CardShow'
import Loading from '../components/commons/Loading'
import Navbar from '../components/commons/Navbar'
import GetData from '../hooks/GetData'

function Series () {
  const urlApi = `https://api.tvmaze.com/search/shows?q=csi`
  // const [res, loading, error ] = GetData(urlApi)
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
        <h1 className='mt-4, mb-5'>Results for your research</h1>
        <div className='row gy-4'>
          {res.map((result, index) => (
            <div key={index} className='col-12 col-md-6 col-lg-4'>
              <CardShow
                {...result}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Series
