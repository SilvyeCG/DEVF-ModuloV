import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'
/*
*Styles */
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
/*
*components  */
import 'react-toastify/dist/ReactToastify.css'

// Router
import Paths from './routes/Paths'

const root = document.getElementById('root')
createRoot(root).render(
  <>
    {/* <Countries /> */}
    <HelmetProvider>

      <BrowserRouter>
        <Paths />
        <ToastContainer />
      </BrowserRouter>
      {/* <ToastContainer /> */}
    </HelmetProvider>
  </>
)
