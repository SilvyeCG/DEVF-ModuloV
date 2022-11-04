// import { useEffect } from 'react'
import '../styles/App.css'

function App () {
  return (
    <div className='App'>
      <p>Hi</p>
    </div>
  )
}

export default App

export const RenderComponent = ({
  text
}) => <h2>{text}</h2>;
  