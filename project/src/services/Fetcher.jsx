import { useState } from "react"

export const Fetcher = async ({ url }) => {
  const [res, setRes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  try {
    const request = await fetch(url)
    const response = await request.json()
    setRes(response)
  } catch (error) {
    setError(String(error))
  } finally {
    setLoading(false)
  }
}

  // const response = await fetch(url)
  // console.log(response)
  // return response.ok && response.json()
// }
