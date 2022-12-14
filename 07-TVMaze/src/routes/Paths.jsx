import { Navigate, Route, Routes } from 'react-router-dom'
import App from '../App'
import Documentation from '../pages/Documentation'
import Show from '../pages/Show'

const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/home' element={<App />} />
      <Route path='/doc' element={<Documentation />} />
      <Route path='/show' element={<Show />} />
    </Routes>
  )
}

export default Paths
