import { Navigate, Route, Routes } from 'react-router-dom'
import App from '../App'
import Documentation from '../pages/Documentation'

const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/home' element={<App />} />
      <Route path='/doc' element={<Documentation />} />
    </Routes>
  )
}

export default Paths
