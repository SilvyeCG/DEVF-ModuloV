import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Paths from './routes/Paths'

const root = document.getElementById('root')
createRoot(root).render(
  <>
    {/* <Home /> */}
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  </>
)
