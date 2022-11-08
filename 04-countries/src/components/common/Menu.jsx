import { NavLink } from 'react-router-dom'

export default function Menu () {
  
  return (
    <menu className='d-flex justify-content-center'>
      <NavLink to='/main' className='nav-link m-4'>Main</NavLink>
      <NavLink to='/about' className='nav-link m-4'>About</NavLink>
      <NavLink to='/services' className='nav-link m-4'>Services</NavLink>
    </menu>
  )
}
