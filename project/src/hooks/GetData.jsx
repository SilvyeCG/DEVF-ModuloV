import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function GetData ({ urlApi }) {
  const [res, setRes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  const getDataQuery = async () => {
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
    getDataQuery()
  }, [urlApi])

  console.log(res)

  useEffect(() => {
    if (error !== '') toast.error(error)
  }, [error])

  return { res, loading, error }
}
