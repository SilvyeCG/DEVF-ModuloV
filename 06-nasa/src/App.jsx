import { useState, useEffect } from 'react'
import axios from 'axios'

//utils
import { getHoy } from './utils/Funciones'

//toastify
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//componentes
import Header from './componets/Header'
import Buscar from './componets/Buscar'
import Card from './componets/Card'

const App = () => {

  const hoy = getHoy()

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState()
  const [query, setQuery] = useState({ fecha: hoy })

  console.log(query)

  useEffect(() => {

    const fetchItems = async () => {

      setIsLoading(true)
      const result = await axios(`https://api.nasa.gov/planetary/apod?api_key=6w8aI1d8nauLsW5qvXJ0WaWOkjb7gTvkl7987Sga&date=${query.fecha}`)

      console.log(result.data)
      setItems(result.data)

      setIsLoading(false)
    }

    try {
      fetchItems()
    } catch (err) {
      toast.error(err)
    }


  }, [query])

  return (
    <>
      <Header />
      <Buscar getQuery={(q) => setQuery(q)} />
      <Card isLoading={isLoading} items={items} />
      <ToastContainer />
    </>
  )
}

export default App