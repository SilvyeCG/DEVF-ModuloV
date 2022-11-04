import { useEffect } from 'react'
import { useState } from 'react'
import Card from './common/Card'
import Loading from './common/Loading'

import { toast } from 'react-toastify'

// 00:26:26 27/10/22 //
export const Countries = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { signal, abort } = new AbortController()

  const apiURL = 'https://restcountries.com/v3.1/all'

  const getData = async () => {
    try {
      const req = await fetch(apiURL, { signal })
      const res = await req.json()
      setCountries(res)
      console.log(res)
      // const res = await req.status === 200 ? req.json() : []
      // console.log(res)
    } catch (error) {
      setError(String(error))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()

    return () => abort()
  }, [])

  useEffect(() => {
    if (error !== '') toast.error('There was a mistake')
  }, [error])

  if (loading) return <Loading />

  return (
    <section className='container py-5'>
      <div className='row gy-4'>
        {countries.map((country, index) => (
          <div key={index} className='col-12 col-md-6 col-lg-3'>
            <Card {...country} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Countries
