import { Navigate, Route, Routes } from 'react-router-dom'
import Documentation from '../pages/Documentation'
import Home from '../pages/Home'
const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/home' element={<Home />} />
      <Route path='/doc' element={<Documentation />} />
    </Routes>
  )
}

export default Paths
