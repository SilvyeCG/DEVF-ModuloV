import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Fetcher } from '../services/Fetcher'

export default function UseGetData (url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  // const { signal, abort } = new AbortController()

  const getData = async () => {
    try {
      const req = await Fetcher({ url })
      // const req = await fetch(apiURL)
      // req.ok && setData(await req.json())
      // !req.ok && setError(req.statusText)
      // const req = await fetch(apiURL, { signal })
      // const res = req.status === 200 ? await req.json() : []
      setData(req)
      // console.log(res)
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

    // return () => abort()
  }, [url])

  useEffect(() => {
    if (error !== '') toast.error(error)
  }, [error])

  return { data, loading, error }
}
