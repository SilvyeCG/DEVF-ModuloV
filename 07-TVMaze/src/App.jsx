import { useState } from 'react'
import Logo from './Components/Commons/Logo'
import Navbar from './Components/Commons/Navbar'

function App () {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='Navbar'>
        <Navbar />
        <Logo />
      </div>
    </>
  )
}

export default App
