import { Helmet } from 'react-helmet-async'
import Card from '../components/common/Card'
import Loading from '../components/common/Loading'
import UseGetData from '../hooks/UseGetData'

// 01:29:00 31/10/22 //
export const Countries = () => {
  const apiURL = 'https://api.tvmaze.com/search/shows?q=csi'
  const { data: countries, loading } = UseGetData(apiURL)

  if (loading) return <Loading />

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Countries API</title>
      </Helmet>
      {/* <section>
      </section> */}
      <section className='container py-5'>
        <form className='mb-4'>
          <input className='form-control' type='text' placeholder='Search...' />
        </form>
        <div className='row gy-4'>
          {countries.map((country, index) => (
            <div key={index} className='col-12 col-md-6 col-lg-3'>
              <Card {...country} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Countries
