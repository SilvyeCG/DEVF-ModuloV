import { Navigate, Route, Routes } from 'react-router-dom'
import Countries from '../pages/Countries'
import Country from '../pages/Country'

export default function Paths () {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/countries' />} />
      <Route path='/countries' element={<Countries />} />
      {/* los 2 puntos significan que son un valor variable => Se convierte en una URL dinámica */}
      <Route path='/country/:idCode' element={<Country />} />
      <Route path='/404' element={<p className='text-center text-white'>PAGE NOT FOUND</p>} />
      <Route path='*' element={<Navigate to='/404' />} />
    </Routes>
  )
}