import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
/*
*Styles */
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
/*
*components  */
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

// Router
import Paths from './routes/Paths'

const root = document.getElementById('root')
createRoot(root).render(
  <>
    {/* <Countries /> */}
    <BrowserRouter>
      <Paths />
      <ToastContainer />
    </BrowserRouter>
    {/* <ToastContainer /> */}
  </>
)
