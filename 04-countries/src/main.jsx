import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
/*
*Styles */
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
/*
*components  */
import { Countries } from './components/Countries'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import RoutingDoc from './docs/RoutingDocu'

const root = document.getElementById('root')
createRoot(root).render(
  <>
    {/* <Countries /> */}
    <BrowserRouter>
      <RoutingDoc />
    </BrowserRouter>
    {/* <ToastContainer /> */}
  </>
)
