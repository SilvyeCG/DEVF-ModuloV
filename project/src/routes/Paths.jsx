import { Navigate, Route, Routes } from 'react-router-dom'
import Documentation from '../pages/Documentation'
import Series from '../pages/Series'
import Home from '../pages/Home'
const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/home' element={<Home />} />
      <Route path='/doc' element={<Documentation />} />
      <Route path='/show' element={<Series />} />

    </Routes>
  )
}

export default Paths
