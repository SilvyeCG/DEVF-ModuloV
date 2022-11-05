import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function UseGetData (apiURL) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { signal, abort } = new AbortController()

  const getData = async () => {
    try {
      const req = await fetch(apiURL, { signal })
      const res = await req.json()
      setData(res)
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
  }, [apiURL])

  useEffect(() => {
    if (error !== '') toast.error('There was a mistake')
  }, [error])

  return { data, loading }
}
