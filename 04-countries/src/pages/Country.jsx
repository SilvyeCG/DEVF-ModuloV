import Loading from '../components/common/Loading'
import UseGetData from '../hooks/UseGetData'

export default function Country () {
  const apiURL = 'https://restcountries.com/v3.1/name/mexico'

  const { data: country, loading } = UseGetData(apiURL)

  if (loading) return <Loading />

  // const { flags, common, official } = country[0]
  return (
    <>
      <section className='Container py-5'>
        <article className='text-white text-center'>
          <h1 className='mt-3'>{country[0].name.official}</h1>
          <img width='400px' src={country[0].flags.svg} alt={country[0].name.common} srcSet='' />
        </article>
      </section>
    </>
  )
}
