import { createRoot } from 'react-dom/client'
/*
*Styles */
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
/*
*components  */
import { Countries } from './components/Countries'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const root = document.getElementById('root')
createRoot(root).render(
  <>
    <Countries />
    <ToastContainer />
  </>
)