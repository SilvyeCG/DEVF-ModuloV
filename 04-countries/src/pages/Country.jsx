import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import Loading from '../components/common/Loading'
import UseGetData from '../hooks/UseGetData'

export default function Country () {
  const { idCode } = useParams()
  const apiURL = `https://restcountries.com/v3.1/alpha/${idCode}`

  const { data: country, loading, error } = UseGetData(apiURL)

  if (loading) return <Loading />

  if (error !== '') return <Navigate to='/404' />

  // const { flags, common, official } = country[0]
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{country[0].name.common}</title>
      </Helmet>
      <section className='Container py-5'>
        <Link className='btn btn-danger m-5' to='/'>
          Home
        </Link>
        <article className='text-white text-center'>
          <h1 className='mt-3'>{country[0].name.official}</h1>
          <img width='400px' src={country[0].flags.svg} alt={country[0].name.common} srcSet='' />
          <h1 className='mt-3'>{country[0].name.common}</h1>
        </article>
      </section>
    </>
  )
}
