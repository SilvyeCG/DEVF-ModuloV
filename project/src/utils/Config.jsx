
// import GetData from '../hooks/GetData'

export default function Config (query) {
  // const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`
  console.log(query)

  const result = async () => {
    try {
      const req = await fetch(query)
      const res = await req.json()
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }
  return result()
}
